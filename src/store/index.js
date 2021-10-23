import { createStore } from "vuex";
import { homeModule } from "@/modules/home/store";

export default createStore({
  modules: {
    homeModule,
  },
});
