import { createRouter } from "vue-router";

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
    path: "/kitsudo",
    redirect: "/projects/kitsudo",
  },
  {
    path: "/projects/kitsudo",
    name: "Kitsudo",
    component: () => import("@/pages/Kitsudo.vue"),
    meta: { title: "Kitsudo | heckr.dev" },
  },
  {
    path: "/projects/:slug",
    name: "ProjectDetail",
    component: () => import("@/pages/Projects.vue"),
    meta: { title: "Project | heckr.dev", pageKey: "/projects" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/pages/NotFound.vue"),
    meta: { title: "404 Not Found | heckr.dev" },
  },
];

export function createAppRouter(history) {
  const router = createRouter({
    history,
    routes,
    scrollBehavior(_, __, savedPosition) {
      return savedPosition || { top: 0 };
    },
  });

  return router;
}
