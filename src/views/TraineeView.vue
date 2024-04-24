<template>
  <div class="container px-5 py-3 bg-dark d-flex flex-column">
    <router-link to="/" class="text-decoration-none"
      ><h1 class="text-center fw-bolder text-danger">
        {{ selectedTrainee.nama }}
      </h1></router-link
    >
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
      this.trainee = res.data.trainee;

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
