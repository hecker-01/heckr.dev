import "./assets/main.css";
import { createApp, createSSRApp } from "vue";
import { createWebHistory } from "vue-router";
import App from "./App.vue";
import { createAppRouter } from "./router";
import { initEasterEggs } from "./services/easterEggs";

const strip = (path) => path.replace(/(.)\/$/, "$1");
const root = document.querySelector("#app");
const router = createAppRouter(createWebHistory());

// Resolve the route before choosing how to mount (install would otherwise
// start this navigation itself).
router.push(location.pathname + location.search + location.hash);
router.isReady().then(() => {
  // Hydrate only markup prerendered for this route. A host that falls back to
  // another page's HTML (404.html, the dev server's empty shell) or a legacy
  // ?project=/?post= link gets a fresh render instead of a broken hydration.
  const route = router.currentRoute.value;
  const prerendered = root.dataset.prerendered;
  const matches =
    prerendered === "404"
      ? route.name === "NotFound"
      : Boolean(prerendered) &&
        strip(prerendered) === strip(route.path) &&
        !route.query.project &&
        !route.query.post;
  if (!matches) root.textContent = "";
  (matches ? createSSRApp : createApp)(App).use(router).mount(root);
});

document.addEventListener("dragstart", (event) => {
  if (event.target instanceof HTMLImageElement) event.preventDefault();
});

// Initialize easter eggs after app is mounted
initEasterEggs();
