<template>
  <h3
    class="card-text fs-5 fw-normal fst-italic text-body-emphasis float-start"
  >
    {{ generasi }}
  </h3>
</template>

<script>

export default {
  props: ["gen"],
  data() {
    return {
      generasi: "",
    };
  },
  mounted() {
    this.calculateGenerasi()
  },

  methods: {
    calculateGenerasi() {
      let val = this.gen;
      if (val % 100 >= 11 && val % 100 <= 13) {
        this.generasi = val + "th Generation";
      } else {
        switch (val % 10) {
          case 1:
            this.generasi = val + "st Generation";
            break;
          case 2:
            this.generasi = val + "nd Generation";
            break;
          case 3:
            this.generasi = val + "rd Generation";
            break;
          default:
            this.generasi = val + "th Generation";
        }
      }
    },
  },
};
</script>
