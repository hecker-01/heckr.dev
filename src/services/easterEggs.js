// Easter eggs and fun terminal interactions
import { getAllReposWithLanguages } from "./githubService.js";

let konamiIndex = 0;
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

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
        "- secret() - ???\n",
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
    } catch (error) {
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
      "%cHere's a hint: ↑ ↑ ↓ ↓ ← → ← → B A",
      "font-size: 12px; color: #fab387;",
    );
  };

  // Konami code handler
  document.addEventListener("keydown", (e) => {
    if (e.code === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        activateKonamiCode();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
};

const activateKonamiCode = () => {
  // Create celebration effect
  console.log(
    "%cKONAMI CODE ACTIVATED!",
    "font-size: 24px; font-weight: bold; color: #f9e2af; text-shadow: 2px 2px 4px #000;",
  );

  // Create rainbow border effect
  document.body.style.animation = "rainbow-border 2s linear infinite";

  // Add rainbow animation if not exists
  if (!document.getElementById("konami-style")) {
    const style = document.createElement("style");
    style.id = "konami-style";
    style.textContent = `
      @keyframes rainbow-border {
        0% { box-shadow: inset 0 0 0 3px #f38ba8; }
        16% { box-shadow: inset 0 0 0 3px #fab387; }
        33% { box-shadow: inset 0 0 0 3px #f9e2af; }
        50% { box-shadow: inset 0 0 0 3px #a6e3a1; }
        66% { box-shadow: inset 0 0 0 3px #89dceb; }
        83% { box-shadow: inset 0 0 0 3px #89b4fa; }
        100% { box-shadow: inset 0 0 0 3px #cba6f7; }
      }
    `;
    document.head.appendChild(style);
  }

  // Remove rainbow border after 5 seconds
  setTimeout(() => {
    document.body.style.animation = "";
  }, 5000);
};
