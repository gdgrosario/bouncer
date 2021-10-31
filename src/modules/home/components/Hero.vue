<template>
  <div>
    <splide :options="options">
      <splide-slide>
        <img
          class="ml-120 w-80 m-auto mr-40 mt-24"
          src="../../../static/iphonex.png"
        />
        <span class="absolute top-44 left-28 font-bold text-5xl text-white"
          >IphoneX</span
        >
        <p class="absolute top-56 left-28 w-3/6 text-sm mt-1 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ipsam, vero quibusdam sed harum.
        </p>
        <span
          class="
            absolute
            top-56
            left-28
            text-sm
            mt-14
            p-4
            bg-indigo-700
            text-white
            rounded-full
          "
          >Quiero probar!</span
        >
      </splide-slide>
      <splide-slide>
        <img
          class="ml-120 w-56 m-auto mr-40 mt-24"
          src="../../../static/samsung.png"
        />
        <span class="absolute top-44 left-28 font-bold text-5xl text-white"
          >Iphone 8</span
        >
        <p class="absolute top-56 left-28 w-3/6 text-sm mt-1 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ipsam, vero quibusdam sed harum.
        </p>
        <span
          class="
            absolute
            top-56
            left-28
            text-sm
            mt-14
            p-4
            bg-indigo-700
            text-white
            rounded-full
          "
          >Quiero probar!</span
        >
      </splide-slide>
      <splide-slide>
        <img
          class="ml-120 w-80 m-auto mr-40 mt-24"
          src="../../../static/iphone12.png"
        />
        <span class="absolute top-44 left-28 font-bold text-5xl text-white"
          >Iphone12
        </span>
        <p class="absolute top-56 left-28 w-3/6 text-sm mt-1 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ipsam, vero quibusdam sed harum.
        </p>
        <span
          class="
            absolute
            top-56
            left-28
            text-sm
            mt-14
            p-4
            bg-indigo-700
            text-white
            rounded-full
          "
          >Quiero probar!</span
        >
      </splide-slide>
    </splide>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      options: {
        rewind: true,
        gap: "1rem",
        autoplay: true,
        perpage: 1,
      },
    };
  },
};
</script>

<style>
.splide.splide--slide.splide--ltr.splide--draggable.is-active {
  background: linear-gradient(to right, #ff4858, #8f65ff);
}
</style>
