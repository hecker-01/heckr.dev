export async function getAllReposWithLanguages(username = "hecker-01") {
  try {
    const repos = [];
    let page = 1;
    const perPage = 100;

    // Fetch all repositories (handle pagination)
    while (true) {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`
      );

      if (!response.ok) break;

      const data = await response.json();
      if (!data.length) break;

      repos.push(...data);

      if (data.length < perPage) break;
      page++;
    }

    // Count languages across all repos
    const languageCounts = {};

    repos.forEach((repo) => {
      if (repo.language) {
        languageCounts[repo.language] =
          (languageCounts[repo.language] || 0) + 1;
      }
    });

    // Sort by count (descending) and format
    const sortedLanguages = Object.entries(languageCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([language, count]) => ({ language, count }));

    return {
      repos,
      languages: sortedLanguages,
      totalRepos: repos.length,
    };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return {
      repos: [],
      languages: [],
      totalRepos: 0,
    };
  }
}
