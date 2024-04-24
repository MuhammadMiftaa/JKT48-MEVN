<template>
  <div class="d-flex flex-row justify-content-between align-items-start mt-4" style="font-family: 'title';">
    <div class="text-light d-flex flex-column justify-content-between">
      <detail var="Fullname:" :data="data.nama_lengkap"></detail>
      <detail var="Stage name:" :data="data.nama"></detail>
      <detail var="Nickname:" :data="data.nama_panggilan"></detail>
      <detail
        var="Generation:"
        :data="data.generasi + 'th Generation'"
      ></detail>
    </div>
    <transition appear enter-active-class="animate__animated animate__fadeIn">
      <img :src="data.foto" class="rounded shadow-lg" alt="" />
    </transition>
  </div>
  <hr class="text-light" style="margin-right: 300px; margin-top: -4px" />
  <div class="d-flex flex-row justify-content-start mt-3 text-light position-relative" style="font-family: 'title';">
    <div class="text-light d-flex flex-column justify-content-between" style="flex-basis: 60%;">
      <detail var="Jikoshoukai:" :data="data.salam_perkenalan"></detail>
      <detail var="Joining date:" :data="data.tanggal_bergabung"></detail>
      <detail var="Fanbase:" :data="data.fanbase"></detail>
      <detail var="University:" :data="data.universitas"></detail>
      <div class="mb-0">
        <h6
          class="fw-lighter text-decoration-underlined fs-6 text-secondary my-0" style="font-family: 'light';"
        >
          Major:
        </h6>
        <h3 class="mt-0 fw-semibold">
          {{ data.jurusan }}
        </h3>
      </div>
    </div>
    <div class="text-light d-flex flex-column justify-content-start text-end" style="flex-basis: 40%;">
      <detail var="Age:" :data="data.umur + ' years old'"></detail>
      <detail var="Date of Birth:" :data="data.tanggal_lahir"></detail>
      <detail var="City of Birth:" :data="data.kota_lahir"></detail>
      <detail var="City of Origin:" :data="data.asal"></detail>
    </div>
    <router-link to="/" class="position-absolute bottom-0 end-0">
      <a
        class="icon-link icon-link-hover text-decoration-none text-light me-3 fw-bold"
        style="--bs-link-hover-color-rgb: 25, 135, 84"
        href="#"
      >
        Back to Home
        <fa
          class="bi"
          aria-hidden="true"
          :icon="['fas', 'right-to-bracket']"
        ></fa>
      </a>
    </router-link>
  </div>
</template>

<script>
import Detail from "./Detail.vue";
export default {
  components: { Detail },
  props: ["data"],
};
</script>

<style>
@font-face {
  font-family: "title";
  src: url("../assets/font/adineue-PRO-Bold.ttf") format("truetype");
}
</style>