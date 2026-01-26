<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getAllPosts, getPostBySlug, getAllTags } from "@/services/blogService";
import TagFilter from "@/components/TagFilter.vue";
import BlogList from "@/components/BlogList.vue";
import BlogPost from "@/components/BlogPost.vue";

const view = ref("list");
const currentPost = ref(null);
const selectedTag = ref(null);
const posts = ref([]);
const tags = ref([]);

const route = useRoute();
const router = useRouter();

const filteredPosts = computed(() => {
  if (!selectedTag.value) return posts.value;
  return posts.value.filter((p) => p.tags.includes(selectedTag.value));
});

const loadPosts = () => {
  posts.value = getAllPosts();
  tags.value = getAllTags();
};

const openPost = (slug) => {
  currentPost.value = getPostBySlug(slug);
  if (currentPost.value) {
    view.value = "post";
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (route.query.post !== slug) {
      router.replace({
        name: "Blog",
        query: { ...route.query, post: slug },
      });
    }
  } else if (route.query.post) {
    const newQuery = { ...route.query };
    delete newQuery.post;
    router.replace({ name: "Blog", query: newQuery });
  }
};

const goBack = ({ skipQueryUpdate = false } = {}) => {
  view.value = "list";
  currentPost.value = null;
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (!skipQueryUpdate && "post" in route.query) {
    const newQuery = { ...route.query };
    delete newQuery.post;
    router.replace({ name: "Blog", query: newQuery });
  }
};

const toggleTag = (tag) => {
  selectedTag.value = selectedTag.value === tag ? null : tag;
};

onMounted(() => {
  loadPosts();
  document.documentElement.style.overflowY = "auto";
  document.body.style.overflowY = "auto";

  // Initialize Clipboard.js
  const clipboard = new ClipboardJS("[data-clipboard-target]");
  clipboard.on("success", function (e) {
    const button = e.trigger;
    const originalText = button.textContent;
    button.textContent = "copied!";
    button.classList.add("text-catppuccin-green");
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove("text-catppuccin-green");
    }, 2000);
    e.clearSelection();
  });

  // Initialize Prism syntax highlighting
  setTimeout(() => {
    if (window.Prism) {
      Prism.highlightAll();
    }
  }, 100);

  const slugFromQuery = route.query.post;
  if (slugFromQuery) {
    openPost(slugFromQuery);
  }
});

onBeforeUnmount(() => {
  document.documentElement.style.overflowY = "";
  document.body.style.overflowY = "";
});

watch(
  () => route.query.post,
  (slug, prevSlug) => {
    if (slug && slug !== prevSlug) {
      openPost(slug);
    } else if (!slug && view.value === "post") {
      goBack({ skipQueryUpdate: true });
    }
  },
);
</script>

<template>
  <div
    class="w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"
  >
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <Transition name="fade" mode="out-in">
        <div v-if="view === 'list'" key="list">
          <div class="mb-12">
            <div class="text-catppuccin-subtle text-sm mb-2">~$ cd ~/blog</div>
            <h1
              class="text-3xl md:text-4xl font-bold text-catppuccin-text mb-4"
            >
              <span class="text-catppuccin-mauve">Blog</span>
            </h1>
            <p class="text-sm text-catppuccin-gray leading-relaxed mb-6">
              My thoughts, tutorials, and experiences on various topics
              including web development, programming, and technology.
            </p>

            <div class="flex items-center gap-4 text-sm mb-6">
              <router-link
                to="/"
                class="text-catppuccin-subtle hover:text-catppuccin-text transition-colors"
              >
                [← home]
              </router-link>
            </div>

            <TagFilter
              :tags="tags"
              :selected-tag="selectedTag"
              @toggle-tag="toggleTag"
            />
          </div>

          <BlogList
            :posts="filteredPosts"
            :selected-tag="selectedTag"
            @open-post="openPost"
          />
        </div>

        <div v-else-if="view === 'post' && currentPost" key="post">
          <BlogPost :post="currentPost" @go-back="goBack" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.2s ease-in;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
