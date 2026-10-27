import { createSSRApp } from "vue";
import { createMemoryHistory } from "vue-router";
import { renderToString } from "vue/server-renderer";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import App from "./App.vue";
import { createAppRouter } from "./router";
import { setSanitizer } from "./services/markdownService";

const purify = createDOMPurify(new JSDOM("").window);
setSanitizer((html) => purify.sanitize(html));

export async function render(url) {
  const router = createAppRouter(createMemoryHistory());
  const app = createSSRApp(App).use(router);
  await router.push(url);
  await router.isReady();
  const context = {};
  const html = await renderToString(app, context);
  return {
    html,
    head: context.head ?? null,
    title: router.currentRoute.value.meta.title,
  };
}
