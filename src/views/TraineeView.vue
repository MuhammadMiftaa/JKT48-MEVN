<template>
  <div
    class="container px-5 py-3 bg-dark d-flex flex-column"
    style="font-family: 'title'"
  >
    <div class="d-flex justify-content-center mt-3">
      <h1 class="text-center fw-bolder text-danger me-1">
        {{ selectedTrainee.nama }}
      </h1>
      <router-link :to="'/edit/' + selectedTrainee.nama">
        <a class="">
          <fa
            class="bi text-light fs-4 p-2 w-auto d-inline-block"
            aria-hidden="true"
            :icon="['fas', 'pen-to-square']"
          ></fa>
        </a>
      </router-link>
    </div>
    <hr class="text-light" />
    <bio :data="selectedTrainee"></bio>
    <hr class="text-light" />
    <links :data="selectedTrainee"></links>
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
      trainee: [],
      selectedTrainee: {},
    };
  },
  async mounted() {
    try {
      const res = await axios.get("/jkt48.member.json");
      this.trainee = res.data.filter((e) => {
        return e.member_regular === false;
      });

      const foundTrainee = this.trainee.find(
        (member) => member.nama === this.$route.params.name
      );
      this.selectedTrainee = foundTrainee || {};
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
