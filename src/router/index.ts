import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/users",
    name: "Users",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Users.vue"),
  },
  {
    path: "/account",
    name: "Account",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Account.vue"),
  },
  {
    path: "/time",
    name: "Time",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Time.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
