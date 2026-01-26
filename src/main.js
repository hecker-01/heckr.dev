import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initEasterEggs } from "./services/easterEggs";

createApp(App).use(router).mount("#app");

// Initialize easter eggs after app is mounted
initEasterEggs();
