<template>
  <div class="mt-5 p-5 h-100">
    <transition
      appear
      enter-active-class="animate__animated animate__fadeInDownBig"
      leave-active-class="animate__animated animate__fadeInUpBig"
    >
      <h2 class="text-center fs-3 fw-bolder text-danger mb-0">
        JKT48
        <span
          class="fw-light"
          :class="isMember ? 'text-warning' : 'text-secondary'"
          >{{ type }}</span
        >
      </h2>
    </transition>
    <hr class="text-light mx-5" />
    <div
      class="bg-dark container-fluid d-flex mx-auto pt-4 justify-content-center align-items-stretch gap-3 flex-wrap w-100 h-100"
    >
      <transition-group
        enter-active-class="animate__animated animate__fadeInUpBig"
        leave-active-class="animate__animated animate__fadeOutDownBig"
      >
        <div v-for="m in members" :key="m.id" class="card">
          <img :src="m.foto" :alt="m.nama" />
          <div class="card-body position-relative">
            <h2 class="card-title fs-4 fw-bolder">{{ m.nama }}</h2>
            <h3 class="card-text fs-6 fw-light text-body-secondary">
              {{ m.umur }} years old
            </h3>
            <gen-format :gen="m.generasi"></gen-format>
            <button
              @click="sendID(m.id)"
              type="light"
              class="btn btn-light position-absolute bottom-0 end-0"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <a
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                title="Tooltip"
                ><fa
                  class="float-end fs-3"
                  :icon="['far', 'circle-question']"
                ></fa>
              </a>
            </button>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import GenFormat from "../components/GenFormat.vue";
export default {
  components: { GenFormat },
  props: ["members", "type", "isMember"],
  data() {
    return {
      index: 0,
      isTrainee: true
    };
  },
  methods: {
    sendID(id) {
      this.$emit("sendID", id, this.isTrainee);
    },
  },
  mounted(){
    this.isTrainee = !this.isMember
  }
};
</script>
