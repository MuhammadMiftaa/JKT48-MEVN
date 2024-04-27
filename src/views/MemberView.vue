<template>
  <div
    class="container px-5 py-3 bg-dark d-flex flex-column"
    style="font-family: 'title'"
  >
  <div class="d-flex justify-content-center mt-3">
    <h1 class="text-center fw-bolder text-danger me-1">
      {{ selectedMember.nama }}
    </h1>
    <router-link :to="'/edit/' + selectedMember.nama">
      <a class="">
        <fa class="bi text-light fs-4 p-2 w-auto d-inline-block" aria-hidden="true" :icon="['fas', 'pen-to-square']"></fa>
      </a>
    </router-link>
  </div>
    <hr class="text-light" />
    <bio :data="selectedMember"></bio>
    <hr class="text-light" />
    <links :data="selectedMember"></links>
  </div>
</template>

<script>
import axios from "axios";
import Bio from "../components/Bio.vue";
import Links from "../components/Links.vue";
export default {
  components: { Bio, Links },
  data() {
    return {
      member: [],
      selectedMember: {},
      modal: "",
    };
  },
  async mounted() {
    // this.modal = document.querySelector('.modal-backdrop')
    // this.modal.classList.remove('show')
    // this.modal.remove()
    // location.reload()
    // for(let i = 0; i++; i==0){
    //   location.href = location.href;
    // }
    try {
      const res = await axios.get("/jkt48.member.json");
      this.member = res.data.member;

      const foundMember = this.member.find(
        (member) => member.nama === this.$route.params.name
      );
      this.selectedMember = foundMember || {};
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
@font-face {
  font-family: "title";
  src: url("../assets/font/adineue-PRO-Bold.ttf") format("truetype");
}
</style>
