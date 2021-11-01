<template>
  <Navitem />
  <Navbar />
  <Products />
  <Footer />
</template>

<script>
import Navbar from "../../home/components/Navbar.vue";
import Navitem from "../../home/components/NavItem.vue";
import Products from "../components/Products.vue";
import Footer from "../../home/components/Footer.vue";
export default {
  components: {
    Navbar,
    Navitem,
    Products,
    Footer,
  },
};
</script>

<style></style>
