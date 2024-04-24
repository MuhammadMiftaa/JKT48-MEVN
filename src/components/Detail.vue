<template>
  <transition appear enter-active-class="animate__animated animate__fadeIn">
    <div class="mb-4">
      <h6
        class="fw-lighter text-decoration-underlined fs-6 text-secondary my-0"  style="font-family: 'light';"
      >
        {{ var }}
      </h6>
      <h3 class="mt-0 fw-semibold">{{ data }}</h3>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["var", "data"],
};
</script>

<style>
@font-face {
  font-family: "light";
  src: url("../assets/font/Corporate\ A\ Light.ttf") format("truetype");
}
</style>