import { createStore } from "vuex";
import { homeModule } from "@/modules/home/store";
import { authModule } from "@/modules/auth/store";

export default createStore({
  modules: {
    homeModule,
    authModule,
  },
});
