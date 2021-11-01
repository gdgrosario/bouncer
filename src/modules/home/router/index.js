export default {
  name: "home",
  component: () =>
    import(
      /* webpackChunkName: "home" */ "@/modules/home/layout/HomeLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "Home",
      component: () =>
        import(/* webpackChunkName: "Home" */ "@/modules/home/views/Home.vue"),
    },
  ],
};
