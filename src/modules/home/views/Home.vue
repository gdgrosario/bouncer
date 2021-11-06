<template>
  <NavItem />
  <Navbar />
  <Hero />
  <Footer />
</template>

<script>
// import NavItem from '../home/components/NavItem.vue'
import NavItem from "../components/NavItem.vue";
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
// import Navbar from '../home/components/Navbar.vue'
// import Hero from '../home/components/Hero.vue'
// import Footer from '../home/components/Footer.vue'
export default {
  name: "Home",
  components: {
    NavItem,
    Navbar,
    Hero,
    Footer,
  },
};
</script>
