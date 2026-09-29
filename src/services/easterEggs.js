// Easter eggs and fun terminal interactions
import { getAllReposWithLanguages } from "./githubService.js";

let onekoLoadPromise;
let pendingOnekoVisible = true;
let pointerBridgeInstalled = false;

const moveOnekoTarget = ({ x, y }) => {
  document.dispatchEvent(
    new MouseEvent("mousemove", {
      bubbles: true,
      clientX: x,
      clientY: y,
    }),
  );
};

export const isOnekoVisible = () => {
  const oneko = document.getElementById("oneko");
  return Boolean(oneko && oneko.style.display !== "none");
};

export const toggleOneko = (position = {}) => {
  const target = {
    x: Number.isFinite(position.x) ? position.x : window.innerWidth / 2,
    y: Number.isFinite(position.y) ? position.y : window.innerHeight / 2,
  };

  const existingOneko = document.getElementById("oneko");
  if (existingOneko) {
    if (existingOneko.style.display === "none") {
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
        return Promise.resolve(false);
      }
      window.heckrOneko?.show();
      existingOneko.style.display = "";
      moveOnekoTarget(target);
      return Promise.resolve(true);
    }

    window.heckrOneko?.hide();
    existingOneko.style.display = "none";
    return Promise.resolve(false);
  }

  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
    return Promise.resolve(false);
  }

  if (onekoLoadPromise) {
    pendingOnekoVisible = !pendingOnekoVisible;
    return onekoLoadPromise;
  }

  if (!pointerBridgeInstalled) {
    document.addEventListener("pointermove", (event) => {
      if (event.pointerType === "mouse") return;
      moveOnekoTarget({ x: event.clientX, y: event.clientY });
    });
    pointerBridgeInstalled = true;
  }

  pendingOnekoVisible = true;
  onekoLoadPromise = new Promise((resolve) => {
    const script = document.createElement("script");
    const assetBase = import.meta.env.BASE_URL;
    script.src = `${assetBase}oneko/oneko.js`;
    script.dataset.cat = `${assetBase}oneko/oneko.gif`;
    script.dataset.persistPosition = "false";
    script.async = true;

    script.onload = () => {
      const oneko = document.getElementById("oneko");
      const started = Boolean(oneko);
      if (started && pendingOnekoVisible) {
        moveOnekoTarget(target);
      } else if (oneko) {
        window.heckrOneko?.hide();
        oneko.style.display = "none";
      } else {
        script.remove();
        onekoLoadPromise = undefined;
      }
      resolve(started && pendingOnekoVisible);
    };

    script.onerror = () => {
      script.remove();
      onekoLoadPromise = undefined;
      resolve(false);
    };

    document.body.appendChild(script);
  });

  return onekoLoadPromise;
};

export const initEasterEggs = () => {
  // Console welcome message
  console.log(
    "%cWelcome to heckr.dev",
    "font-size: 20px; font-weight: bold; color: #cba6f7;",
  );

  console.log(
    "%cWelcome to the dev console, here are some commands to try:",
    "font-size: 14px; color: #a6adc8;",
  );

  console.log(
    "%c- help() - show available commands\n" +
      "- about() - learn more about me\n" +
      "- skills() - view my tech stack\n" +
      "- contact() - get my contact info",
    "font-size: 12px; color: #6c7086;",
  );

  // Define console commands
  window.help = () => {
    console.log(
      "%cAvailable commands:",
      "font-size: 16px; font-weight: bold; color: #cba6f7;",
    );
    console.log(
      "%c- help() - show this message\n" +
        "- about() - about the developer\n" +
        "- skills() - technical skills\n" +
        "- contact() - contact information\n" +
        "- secret() - get a hint about the hidden interactions\n",
      "font-size: 12px; color: #a6adc8;",
    );
  };

  window.about = () => {
    console.log(
      "%cAbout me",
      "font-size: 16px; font-weight: bold; color: #cba6f7;",
    );
    console.log(
      "%cA passionate developer who loves building cool things with code!\n" +
        "Check out my projects and posts on the site.",
      "font-size: 12px; color: #a6adc8;",
    );
  };

  window.skills = async () => {
    console.log(
      "%cTech stack",
      "font-size: 16px; font-weight: bold; color: #cba6f7;",
    );
    console.log("%cFetching...", "font-size: 12px; color: #6c7086;");

    try {
      const { languages, totalRepos } = await getAllReposWithLanguages();

      if (languages.length > 0) {
        console.log(
          "%cTop languages from " + totalRepos + " repositories found:",
          "font-size: 14px; font-weight: bold; color: #a6adc8;",
        );

        languages.slice(0, 10).forEach(({ language, count }, index) => {
          console.log(
            `%c${index + 1}. ${language}: ${count} repos`,
            "font-size: 12px; color: #a6adc8;",
          );
        });
      } else {
        console.log(
          "%cUnable to fetch data, please try again later.",
          "font-size: 12px; color: #f38ba8;",
        );
      }
    } catch {
      console.log(
        "%cError loading data, please try again later.",
        "font-size: 12px; color: #f38ba8;",
      );
    }
  };

  window.contact = () => {
    console.log(
      "%cContact info",
      "font-size: 16px; font-weight: bold; color: #cba6f7;",
    );
    console.log(
      "%cGitHub: https://github.com/hecker-01\n" + "Feel free to reach out!",
      "font-size: 12px; color: #a6adc8;",
    );
  };

  window.secret = () => {
    console.log(
      "%cYou found the secret command",
      "font-size: 18px; font-weight: bold; color: #f9e2af;",
    );
    console.log(
      "%cClick the ASCII art for Oneko, or the git log heading for the commit tree.",
      "font-size: 12px; color: #fab387;",
    );
  };
};
