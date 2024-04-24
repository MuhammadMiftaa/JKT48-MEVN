<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fw-bold fs-4" id="exampleModalLabel">
            {{ nama }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex gap-5">
          <img :src="foto" alt="" class="rounded-3" />
          <div class="d-flex flex-column justify-content-evenly w-50">
            <h2 class="fs-4 fst-italic fw-bold text-dark">
              <span class="fw-light text-body-secondary">Fullname: </span
              >{{ nama }}
            </h2>
            <h2 class="fs-4 fst-italic fw-bold text-dark">
              <span class="fw-light text-body-secondary">Generation: </span
              >{{ generasi }}
            </h2>
            <h2 class="fs-4 fst-italic fw-bold text-dark">
              <span class="fw-light text-body-secondary">Age: </span>{{ umur }}
            </h2>
            <h2 class="fs-4 fst-italic fw-bold text-dark">
              <span class="fw-light text-body-secondary">Date of Birth: </span
              >{{ tanggal_lahir }}
            </h2>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn"
            data-bs-dismiss="modal"
          >
            <router-link :to="'/' + type.toLowerCase() + '/' + nama">
              <a
                class="icon-link icon-link-hover text-decoration-none text-dark me-3 fw-bold"
                style="--bs-link-hover-color-rgb: 25, 135, 84"
              >
                View More
                <fa
                  class="bi"
                  aria-hidden="true"
                  :icon="['fas', 'arrow-right-long']"
                ></fa>
              </a>
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "type",
    "nama",
    "foto",
    "tanggal_lahir",
    "umur",
    "asal",
    "generasi",
    "universitas",
    "jurusan",
  ],
  methods: {},
};
</script>
