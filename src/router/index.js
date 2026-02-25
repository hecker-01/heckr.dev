import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Posts from "@/pages/Posts.vue";
import NotFound from "@/pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Home | heckr.dev" },
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
    meta: { title: "Posts | heckr.dev" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: { title: "404 Not Found | heckr.dev" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_, __, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

router.beforeEach((to, _, next) => {
  document.title = to.meta.title || "heckr.dev";
  next();
});

export default router;
