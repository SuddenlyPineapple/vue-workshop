import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/componentTest",
    name: "Component Test",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ComponentTestView")
  }
  // TODO: Zdefiniuj tutaj jakiś nowy widok dla routera - oczywiście wcześniej wrzuć jakiś do folderu ../views :)
];

const router = new VueRouter({
  mode: "history",
  base: process.env.NODE_ENV === "production" ? "/vue-workshop/" : "/",
  routes
});

export default router;
