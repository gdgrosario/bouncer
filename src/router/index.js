import { createRouter, createWebHistory } from "vue-router";
import Home from "@/modules/home/router";
import Auth from "@/modules/auth/router";
import Profile from "@/modules/profile/router";
import Car from "@/modules/car/router";
import ProductView from "@/modules/productView/router";

const routes = [
  {
    path: "/",
    ...Home,
  },
  {
    path: "/auth",
    ...Auth,
  },
  {
    path: "/profile",
    ...Profile,
  },
  {
    name: "team",
    path: "/team",
    component: () =>
      import(/* webpackChunkName: "team" */ "@/global/team/Team.vue"),
  },
  {
    path: "/car",
    ...Car,
  },
  {
    path: "/productView",
    ...ProductView,
  },
];

const router = createRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
