<template>
  <div class="text-red-400 bg-gray-800">
    <Test />
    <h1>{{ count }}</h1>
    <button
      class="rounded-sm py-2 px-3 bg-yellow-400 text-gray-50"
      @click="increment"
    >
      +1
    </button>
  </div>
</template>

<script>
import Test from "../components/Test.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: { Test },
  setup() {
    const { getters, dispatch } = useStore();

    const count = computed(() => getters["homeModule/getCount"]);

    const increment = () => {
      dispatch("homeModule/increment");
    };

    return { count, increment };
  },
};
</script>
