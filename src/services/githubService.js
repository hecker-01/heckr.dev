const GITHUB_USERNAME = "hecker-01";
const CACHE_TTL_MS = 15 * 60 * 1000;
const REQUEST_TIMEOUT_MS = 10000;

let reposCache = null;
let reposCachedAt = 0;
let reposRequest = null;
let contributionsCache = null;
let contributionsCachedAt = 0;
let contributionsRequest = null;

const fetchJson = async (url, { rateLimitMessage } = {}) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) {
      if (response.status === 403 && rateLimitMessage) {
        throw new Error(rateLimitMessage);
      }
      throw new Error(`Request failed (${response.status}).`);
    }
    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("The request timed out.");
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
};

const errorMessage = (error) =>
  error instanceof Error ? error.message : "The data service is unavailable.";

export const getAllReposWithLanguages = () => {
  if (reposCache && Date.now() - reposCachedAt < CACHE_TTL_MS) {
    return Promise.resolve(reposCache);
  }
  if (reposRequest) return reposRequest;

  reposRequest = (async () => {
    try {
      const repos = [];
      const perPage = 100;
      let page = 1;

      while (true) {
        const data = await fetchJson(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=${perPage}&page=${page}`,
          { rateLimitMessage: "GitHub API rate limit reached." },
        );
        if (!Array.isArray(data)) {
          throw new Error("GitHub returned an unexpected response.");
        }
        if (!data.length) break;

        repos.push(...data);
        if (data.length < perPage) break;
        page++;
      }

      const languageCounts = {};
      repos.forEach((repo) => {
        if (repo.language) {
          languageCounts[repo.language] =
            (languageCounts[repo.language] || 0) + 1;
        }
      });

      const result = {
        repos,
        languages: Object.entries(languageCounts)
          .sort((a, b) => b[1] - a[1])
          .map(([language, count]) => ({ language, count })),
        totalRepos: repos.length,
      };
      reposCache = result;
      reposCachedAt = Date.now();
      return result;
    } catch (error) {
      const message = `Could not refresh GitHub data: ${errorMessage(error)}`;
      if (reposCache) {
        return {
          ...reposCache,
          error: `Showing cached GitHub data. ${message}`,
        };
      }
      return { repos: [], languages: [], totalRepos: 0, error: message };
    } finally {
      reposRequest = null;
    }
  })();

  return reposRequest;
};

const loadContributionData = async () => {
  const weeks = 53;
  const targetDays = weeks * 7;
  const today = new Date();
  const data = await fetchJson(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
  );
  if (!Array.isArray(data.contributions)) {
    throw new Error("The contribution service returned unexpected data.");
  }

  const contributionsByDate = new Map(
    data.contributions.map(({ date, count }) => [date, count]),
  );
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - targetDays + 1);

  return Array.from({ length: targetDays }, (_, index) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + index);
    const dateString = date.toISOString().split("T")[0];
    return {
      date: dateString,
      count: contributionsByDate.get(dateString) || 0,
    };
  });
};

export const getContributionData = () => {
  if (
    contributionsCache &&
    Date.now() - contributionsCachedAt < CACHE_TTL_MS
  ) {
    return Promise.resolve({ contributions: contributionsCache, error: null });
  }
  if (contributionsRequest) return contributionsRequest;

  contributionsRequest = (async () => {
    try {
      const contributions = await loadContributionData();
      contributionsCache = contributions;
      contributionsCachedAt = Date.now();
      return { contributions, error: null };
    } catch (error) {
      const message = `Could not refresh contribution data: ${errorMessage(error)}`;
      return {
        contributions: contributionsCache || [],
        error: message,
      };
    } finally {
      contributionsRequest = null;
    }
  })();

  return contributionsRequest;
};

export const getContributionLevel = (count) => {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 8) return 3;
  return 4;
};

export const getGitHubContributionUrl = (date) => {
  return `https://github.com/${GITHUB_USERNAME}?tab=overview&from=${date}&to=${date}`;
};
