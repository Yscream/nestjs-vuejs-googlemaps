import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "GoogleMap",
        component: () => import("../views/GoogleMap.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;