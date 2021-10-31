export default {
  name: "car",
  component: () =>
    import(/* webpackChunkName: "car" */ "@/modules/car/layout/CarLayout.vue"),
  children: [
    {
      path: "",
      name: "car",
      component: () =>
        import(/* webpackChunkName: "car" */ "@/modules/car/views/Car.vue"),
    },
  ],
};
