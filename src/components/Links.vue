<template>
  <div v-if="data"
    class="d-flex justify-content-evenly"
    style="font-family: 'light'"
  >
    <div class="d-flex align-items-center">
      <img
        src="../assets/ig.jpg"
        style="height: 22px; border-radius: 8px"
        alt="instagram"
      />
      <a
        :href="'https://www.instagram.com/' + data.username_ig + '/'"
        class="text-decoration-none fw-lighter text-white ms-1"
        >{{ data.username_ig }}</a
      >
    </div>
    <div class="d-flex align-items-center">
      <img src="../assets/IDN.png" style="height: 22px" alt="IDN" />
      <a
        :href="'https://idn.onelink.me/VKUf/' + idnUsername"
        class="text-decoration-none fw-lighter text-white ms-1"
        >{{ data.username_idn }}</a
      >
    </div>
    <div class="d-flex align-items-center">
      <img
        src="../assets/tiktok.png"
        style="height: 22px; border-radius: 5px"
        alt="tiktok"
      />
      <a
        :href="'https://www.tiktok.com/@' + data.username_tiktok + '/'"
        class="text-decoration-none fw-lighter text-white ms-1"
        >{{ data.username_tiktok }}</a
      >
    </div>
    <div class="d-flex align-items-center">
      <img
        src="../assets/SR.png"
        style="height: 22px; border-radius: 5px"
        alt="showroom"
      />
      <a 
        :href="
          'https://www.showroom-live.com/r/JKT48_' +
          showroomUsername
        "
        class="text-decoration-none fw-lighter text-white ms-1"
        >{{ data.username_sr }}</a
      >
      >
    </div>
    <div class="d-flex align-items-center">
      <img
        src="../assets/x.jpeg"
        style="height: 22px; border-radius: 5px"
        alt="x"
      />
      <a
        :href="'https://www.twitter.com/' + data.username_x + '/'"
        class="text-decoration-none fw-lighter text-white ms-1"
        >{{ data.username_x }}</a
      >
    </div>
  </div>
</template>

<script>
import { data } from 'jquery';

export default {
  props: ["data"],
  data() {
    return {
      username_sr: '',
    }
  },
  computed: {
    showroomUsername() {
      if (this.data && this.data.username_sr) {
        return this.data.username_sr.split(/[\s()]+/)[0];
      }
      return "";
    },
    idnUsername() {
      if (this.data && this.data.username_idn) {
        return this.data.username_idn.split(' ').join('');
      }
      return "";
    },
  }
};
</script>

<style>
@font-face {
  font-family: "light";
  src: url("../assets/font/Corporate\ A\ Light.ttf") format("truetype");
}
</style>
