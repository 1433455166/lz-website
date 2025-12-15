import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/index",
    },
    {
        path: "/index",
        component: () => import("../views/index/index.vue"),
    },
    {
        path: "/love",
        component: () => import("../views/love.vue"),
    },
    // {
    //     path: "/cv",
    //     component: () => import("../views/cv.vue"),
    // },
    // {
    //     path: "/chat",
    //     component: () => import("../views/chat.vue"),
    // },
    {
        path: "/support",
        component: () => import("../views/support.vue"),
    },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
