import { createRouter, createMemoryHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routerOptions = {
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
};

function routerBuilder() {
  return createRouter(routerOptions);
}

const router = routerBuilder();
// classic export
export default router;
// allow build fresh new isolated instances
export { routerBuilder };
