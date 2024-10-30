import {createRouter, createWebHistory} from "vue-router";
import {routes} from "vue-router/auto-routes";

const routers    = [];

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;