<template>
  <form method="POST">
    <div
      class="container px-5 py-3 bg-dark d-flex flex-column"
      style="font-family: 'title'"
    >
      <h1 class="text-center fw-bolder text-danger mt-3">
        {{ selectedMember.nama }}
      </h1>
      <hr class="text-light" />
      <div
        class="d-flex flex-row justify-content-between align-items-start mt-4"
        style="font-family: 'title'"
      >
        <div class="text-light d-flex flex-column justify-content-between">
          <transition
            appear
            enter-active-class="animate__animated animate__fadeIn"
          >
            <div class="mb-4">
              <h6
                class="fw-lighter text-decoration-underlined fs-6 text-secondary my-0"
                style="font-family: 'light'"
              >
                Fullname:
              </h6>
              <input
                class="bio-input"
                type="text"
                :value="selectedMember.nama_lengkap"
              />
            </div>
          </transition>
          <transition
            appear
            enter-active-class="animate__animated animate__fadeIn"
          >
            <div class="mb-4">
              <h6
                class="fw-lighter text-decoration-underlined fs-6 text-secondary my-0"
                style="font-family: 'light'"
              >
                Stage name:
              </h6>
              <input
                class="bio-input"
                type="text"
                :value="selectedMember.nama"
              />
            </div>
          </transition>
          <transition
            appear
            enter-active-class="animate__animated animate__fadeIn"
          >
            <div class="mb-4">
              <h6
                class="fw-lighter text-decoration-underlined fs-6 text-secondary my-0"
                style="font-family: 'light'"
              >
                Nickname:
              </h6>
              <input
                class="bio-input"
                type="text"
                :value="selectedMember.nama_panggilan"
              />
            </div>
          </transition>
          <transition
            appear
            enter-active-class="animate__animated animate__fadeIn"
          >
            <div class="mb-4">
              <h6
                class="fw-lighter text-decoration-underlined fs-6 text-secondary my-0"
                style="font-family: 'light'"
              >
                Generation:
              </h6>
              <input
                class="bio-input"
                type="text"
                :value="selectedMember.generasi"
              />
            </div>
          </transition>
        </div>
        <transition
          appear
          enter-active-class="animate__animated animate__fadeIn"
        >
          <img :src="selectedMember.foto" class="rounded shadow-lg" alt="" />
        </transition>
      </div>
      <hr class="text-light" style="margin-right: 300px; margin-top: -4px" />
      <div
        class="d-flex flex-row justify-content-start mt-3 text-light position-relative"
        style="font-family: 'title'"
      >
        <div
          class="text-light d-flex flex-column justify-content-between"
          style="flex-basis: 60%"
        >
          <transition
            appear
            enter-active-class="animate__animated animate__fadeIn"
          >
            <div class="mb-4">
              <h6
                class="fw-lighter text-decoration-underlined fs-6 text-secondary my-0"
                style="font-family: 'light'"
              >
                Jikoshoukai:
              </h6>
              <textarea
                class="bio-input"
                name="salam_perkenalan"
                cols="39"
                rows="3"
                :value="selectedMember.salam_perkenalan"
              ></textarea>
            </div>
          </transition>
          <transition
            appear
            enter-active-class="animate__animated animate__fadeIn"
          >
            <div class="mb-4">
              <h6
                class="fw-lighter text-decoration-underlined fs-6 text-secondary my-0"
                style="font-family: 'light'"
              >
                Joining Date:
              </h6>
              <input
                class="bio-input bot-left"
                type="text"
                :value="selectedMember.tanggal_bergabung"
              />
            </div>
          </transition>
          <transition
            appear
            enter-active-class="animate__animated animate__fadeIn"
          >
            <div class="mb-4">
              <h6
                class="fw-lighter text-decoration-underlined fs-6 text-secondary my-0"
                style="font-family: 'light'"
              >
                Fanbase:
              </h6>
              <input
                class="bio-input bot-left"
                type="text"
                :value="selectedMember.fanbase"
              />
            </div>
          </transition>
          <transition
            appear
            enter-active-class="animate__animated animate__fadeIn"
          >
            <div class="mb-4">
              <h6
                class="fw-lighter text-decoration-underlined fs-6 text-secondary my-0"
                style="font-family: 'light'"
              >
                University:
              </h6>
              <input
                class="bio-input bot-left"
                type="text"
                :value="selectedMember.universitas"
              />
            </div>
          </transition>
          <transition
            appear
            enter-active-class="animate__animated animate__fadeIn"
          >
            <div class="mb-4">
              <h6
                class="fw-lighter text-decoration-underlined fs-6 text-secondary my-0"
                style="font-family: 'light'"
              >
                Major:
              </h6>
              <input
                class="bio-input bot-left"
                type="text"
                :value="selectedMember.jurusan"
              />
            </div>
          </transition>
        </div>
        <div
          class="text-light d-flex flex-column justify-content-start text-end"
          style="flex-basis: 40%"
        >
          <transition
            appear
            enter-active-class="animate__animated animate__fadeIn"
          >
            <div class="mb-4">
              <h6
                class="fw-lighter text-decoration-underlined fs-6 text-secondary my-0"
                style="font-family: 'light'"
              >
                Age:
              </h6>
              <input
                class="bio-input bot-right"
                type="text"
                :value="selectedMember.umur"
              />
            </div>
          </transition>
          <transition
            appear
            enter-active-class="animate__animated animate__fadeIn"
          >
            <div class="mb-4">
              <h6
                class="fw-lighter text-decoration-underlined fs-6 text-secondary my-0"
                style="font-family: 'light'"
              >
                Date of Birth:
              </h6>
              <input
                class="bio-input bot-right"
                type="text"
                :value="selectedMember.tanggal_lahir"
              />
            </div>
          </transition>
          <transition
            appear
            enter-active-class="animate__animated animate__fadeIn"
          >
            <div class="mb-4">
              <h6
                class="fw-lighter text-decoration-underlined fs-6 text-secondary my-0"
                style="font-family: 'light'"
              >
                City of Birth:
              </h6>
              <input
                class="bio-input bot-right"
                type="text"
                :value="selectedMember.kota_lahir"
              />
            </div>
          </transition>
          <transition
            appear
            enter-active-class="animate__animated animate__fadeIn"
          >
            <div class="mb-4">
              <h6
                class="fw-lighter text-decoration-underlined fs-6 text-secondary my-0"
                style="font-family: 'light'"
              >
                City of Origin:
              </h6>
              <input
                class="bio-input bot-right"
                type="text"
                :value="selectedMember.asal"
              />
            </div>
          </transition>
        </div>
        <div class="d-flex position-absolute end-0 bottom-0">
          <router-link :to="(selectedMember.member_regular ? '/member/' : '/trainee/') + selectedMember.nama">
            <button type="button" class="btn btn-outline-danger px-5 pt-2 me-3">Cancel</button>
          </router-link>
          <button type="submit" class="btn btn-outline-info px-5 pt-2">Save</button>
        </div>
      </div>
      <hr class="text-light" />
      <div
        v-if="selectedMember"
        class="d-flex justify-content-evenly"
        style="font-family: 'light'"
      >
        <div class="d-flex align-items-center">
          <img
            src="../assets/ig.jpg"
            style="height: 22px; border-radius: 8px"
            alt="instagram"
          />
          <input type="text" class="link-input" :value="selectedMember.username_ig">
        </div>
        <div class="d-flex align-items-center">
          <img src="../assets/IDN.png" style="height: 22px" alt="IDN" />
          <input type="text" class="link-input" :value="selectedMember.username_idn">
        </div>
        <div class="d-flex align-items-center">
          <img
            src="../assets/tiktok.png"
            style="height: 22px; border-radius: 5px"
            alt="tiktok"
          />
          <input type="text" class="link-input" :value="selectedMember.username_tiktok">
        </div>
        <div class="d-flex align-items-center">
          <img
            src="../assets/SR.png"
            style="height: 22px; border-radius: 5px"
            alt="showroom"
          />
          <input type="text" class="link-input" :value="selectedMember.username_sr">
          >
        </div>
        <div class="d-flex align-items-center">
          <img
            src="../assets/x.jpeg"
            style="height: 22px; border-radius: 5px"
            alt="x"
          />
          <input type="text" class="link-input" :value="selectedMember.username_x">
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import Detail from "../components/Detail.vue";
import Links from "../components/Links.vue";
export default {
  components: { Detail, Links },
  data() {
    return {
      member: [],
      selectedMember: {},
      modal: "",
    };
  },
  async mounted() {
    try {
      const res = await axios.get("/jkt48.member.json");
      this.member = res.data;

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

.bio-input {
  font-size: 1.7rem;
  background-color: transparent;
  border: 1px solid #6c6c6c;
  padding: 0.4rem 0.7rem 0.2rem;
  color: #f8f9fa;
  border-radius: 7px;
  margin-top: 0.2rem;
}

.bio-input.bot-left {
  width: 38.35rem;
}

.bio-input.bot-right {
  text-align: right;
  width: 18.6rem;
}

.link-input{
  font-size: 1rem;
  background-color: transparent;
  border: 1px solid #6c6c6c;
  padding: 0.2rem 0.5rem;
  color: #f8f9fa;
  width: 75%;
  margin-left: .5rem;
  border-radius: 3px;
}

.save-button{
  position: absolute;
  bottom: 0;
  right: 10rem;
  border: none;
  background-color: transparent;
  color: #f8f9fa;
}
</style>
