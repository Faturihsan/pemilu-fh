import { createRouter, createWebHistory } from "vue-router";

// Lazy load views
const Kandidat = () => import("@/views/kandidat.vue");
const Suara = () => import("@/views/perolehan_suara.vue");
const Dpt = () => import("@/views/dpt.vue");

const routes = [
  { path: "/", component: Kandidat },
  { path: "/perolehan_suara", component: Suara },
  { path: "/dpt", component: Dpt },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
