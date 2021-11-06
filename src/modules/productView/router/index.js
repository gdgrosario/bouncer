export default {
  name: "ProductView",
  component: () =>
    import(
      /* webpackChunkName: "ProductView" */ "@/modules/productView/layout/ProductvLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "ProductView",
      component: () =>
        import(
          /* webpackChunkName: "ProductView" */ "@/modules/productView/views/ProductView.vue"
        ),
    },
  ],
};
