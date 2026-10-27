import { defineComponent, onMounted, useSSRContext, watch } from "vue";
import { applyHeadTags, buildHeadTags } from "@/services/headTags";

/**
 * Renderless tag that owns the page's <head> tags (title, description, robots,
 * canonical, Open Graph, Twitter). Drop `<PageHead v-bind="head" />` into any
 * page; the props are the arguments of buildHeadTags. Prerender collects them
 * through the SSR context, the browser keeps the live head in sync.
 */
export default defineComponent({
  name: "PageHead",
  props: {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    path: { type: String, required: true },
    image: { type: String, default: "" },
    imageWidth: { type: Number, default: 0 },
    imageHeight: { type: Number, default: 0 },
    type: { type: String, default: "website" },
    publishedTime: { type: String, default: "" },
    modifiedTime: { type: String, default: "" },
    readingTime: { type: Number, default: 0 },
    noindex: { type: Boolean, default: false },
  },
  setup(props) {
    if (typeof document === "undefined") {
      const context = useSSRContext();
      if (context) context.head = { ...props };
    }

    onMounted(() =>
      watch(() => ({ ...props }), (page) => applyHeadTags(buildHeadTags(page)), {
        immediate: true,
      }),
    );

    return () => null;
  },
});
