// Easter eggs and fun terminal interactions
import confetti from "canvas-confetti";
import { getAllReposWithLanguages } from "./githubService.js";

let konamiIndex = 0;
let konamiTimeout;
let activeKonamiElements = [];
let activeConfetti;
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
  console.log(
    "%cKONAMI CODE ACTIVATED!",
    "font-size: 24px; font-weight: bold; color: #f9e2af; text-shadow: 2px 2px 4px #000;",
  );

  clearTimeout(konamiTimeout);
  activeConfetti?.reset();
  activeConfetti = undefined;
  activeKonamiElements.forEach((element) => element.remove());
  activeKonamiElements = [];

  const style = document.getElementById("konami-style") ?? document.createElement("style");
  style.id = "konami-style";
  style.textContent = `
      .konami-frame {
        position: fixed;
        z-index: 9998;
        inset: 0;
        border: 2px solid #cba6f7;
        box-shadow: inset 0 0 48px #cba6f722;
        pointer-events: none;
        animation: konami-frame-pulse 1.8s ease-in-out infinite alternate;
      }
      @keyframes konami-frame-pulse {
        from { opacity: .68; }
        to { opacity: 1; }
      }
      @media (prefers-reduced-motion: reduce) {
        .konami-frame { animation: none !important; }
      }
  `;
  if (!style.isConnected) {
    document.head.appendChild(style);
  }

  const frame = document.createElement("div");
  frame.className = "konami-frame";
  frame.setAttribute("aria-hidden", "true");

  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  let confettiCanvas;
  if (!reducedMotion) {
    confettiCanvas = document.createElement("canvas");
    confettiCanvas.setAttribute("aria-hidden", "true");
    Object.assign(confettiCanvas.style, {
      position: "fixed",
      inset: "0",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: "9999",
    });
    document.body.appendChild(confettiCanvas);
    activeConfetti = confetti.create(confettiCanvas, {
      resize: true,
      useWorker: true,
      disableForReducedMotion: true,
    });
    const colors = ["#cba6f7", "#94e2d5", "#f9e2af", "#f38ba8", "#89b4fa", "#a6e3a1"];
    const burst = {
      particleCount: 220,
      spread: 60,
      colors,
      startVelocity: 50,
      ticks: 320,
      zIndex: 9999,
    };
    activeConfetti({ ...burst, angle: 60, origin: { x: 0, y: 0.65 } });
    activeConfetti({ ...burst, angle: 120, origin: { x: 1, y: 0.65 } });
  }

  document.body.append(frame);
  activeKonamiElements = [frame, confettiCanvas].filter(Boolean);

  const dismiss = () => {
    clearTimeout(konamiTimeout);
    activeConfetti?.reset();
    activeConfetti = undefined;
    activeKonamiElements.forEach((element) => element.remove());
    activeKonamiElements = [];
  };
  konamiTimeout = setTimeout(dismiss, 6500);
};
