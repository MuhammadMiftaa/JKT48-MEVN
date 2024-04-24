<template>
  <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid d-flex justify-content-between px-3">
      <transition class="animate__animated animate__fadeIn">
        <a
          class="navbar-brand fs-2 fw-bolder text-danger"
          href="#"
          @click="clearSearch"
          >JKT48 <span class="text-light fw-light fst-italic">New Era</span></a
        >
      </transition>
      <transition class="animate__animated animate__fadeIn">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </transition>
      <div
        class="offcanvas offcanvas-end bg-dark text-light"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5
            class="offcanvas-title text-danger fw-bolder fs-3"
            id="offcanvasDarkNavbarLabel"
          >
            Search by
          </h5>
        </div>
        <div class="offcanvas-body text-light fw-light">
          <div>
            <h4 class="fw-light">Fullname</h4>
            <form class="d-flex mt-3 mb-3 form-floating" role="search">
              <input
                class="form-control me-2 bg-light text-dark"
                id="floatingInput"
                type="text"
                placeholder="Search By Fullname"
                v-model="searchParams.nama"
                @input="searchMember"
              />
              <label class="text-dark" for="floatingInput"
                >Search By Fullname</label
              >
            </form>
          </div>
          <div>
            <h4 class="fw-light">Age</h4>
            <form class="d-flex mt-3 mb-3 form-floating" role="search">
              <input
                class="form-control me-2 bg-light text-dark"
                id="floatingInput"
                type="text"
                placeholder="Search By Age"
                v-model="searchParams.umur"
                @input="searchMember"
              />
              <label class="text-dark" for="floatingInput">Search By Age</label>
            </form>
          </div>
          <div>
            <h4 class="fw-light">Generation</h4>
            <form class="d-flex mt-3 mb-3 form-floating" role="search">
              <input
                class="form-control me-2 bg-light text-dark"
                id="floatingInput"
                type="text"
                placeholder="Search By Generation"
                v-model="searchParams.generasi"
                @input="searchMember"
              />
              <label class="text-dark" for="floatingInput"
                >Search By Generation</label
              >
            </form>
          </div>
          <div>
            <h4 class="fw-light">Origin</h4>
            <form class="d-flex mt-3 mb-3 form-floating" role="search">
              <input
                class="form-control me-2 bg-light text-dark"
                id="floatingInput"
                type="text"
                placeholder="Search By Origin"
                v-model="searchParams.asal"
                @input="searchMember"
              />
              <label class="text-dark" for="floatingInput"
                >Search By Origin</label
              >
            </form>
          </div>
          <div>
            <h4 class="fw-light">University</h4>
            <form class="d-flex mt-3 mb-3 form-floating" role="search">
              <input
                class="form-control me-2 bg-light text-dark"
                id="floatingInput"
                type="text"
                placeholder="Search By University"
                v-model="searchParams.universitas"
                @input="searchMember"
              />
              <label class="text-dark" for="floatingInput"
                >Search By University</label
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      searchParams: {
        nama: "",
        umur: "",
        generasi: "",
        asal: "",
        universitas: "",
      },
    };
  },
  emits: ["search"],
  methods: {
    searchMember() {
      this.$emit("search", this.searchParams);
    },
    clearSearch() {
      this.$emit("clearSearch");
    },
  },
};
</script>
