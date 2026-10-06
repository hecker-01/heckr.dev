import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Home.vue"),
    meta: { title: "Home | heckr.dev" },
  },
  {
    path: "/posts",
    name: "Posts",
    component: () => import("@/pages/Posts.vue"),
    meta: { title: "Posts | heckr.dev" },
  },
  {
    path: "/posts/:slug",
    name: "PostDetail",
    component: () => import("@/pages/Posts.vue"),
    meta: { title: "Post | heckr.dev", pageKey: "/posts" },
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@/pages/Projects.vue"),
    meta: { title: "Projects | heckr.dev" },
  },
  {
    path: "/projects/:slug",
    name: "ProjectDetail",
    component: () => import("@/pages/Projects.vue"),
    meta: { title: "Project | heckr.dev", pageKey: "/projects" },
  },
  {
    path: "/kitsudo",
    name: "Kitsudo",
    component: () => import("@/pages/Kitsudo.vue"),
    meta: { title: "Kitsudo | heckr.dev" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/pages/NotFound.vue"),
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
