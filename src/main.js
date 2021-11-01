import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./styles/tailwind.css";
import "./styles/reset.css";
import "animate.css";
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";

createApp(App).use(store).use(router).use(VueSplide).mount("#app");
