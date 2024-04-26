<template>
  <form action="/member/:nama">
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
              <input class="bio-input" type="text" :value="selectedMember.nama_lengkap">
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
              <input class="bio-input" type="text" :value="selectedMember.nama">
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
              <input class="bio-input" type="text" :value="selectedMember.nama_panggilan">
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
              <input class="bio-input" type="text" :value="selectedMember.generasi">
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
              <textarea class="bio-input" name="salam_perkenalan" cols="39" rows="3" :value="selectedMember.salam_perkenalan"></textarea>
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
              <input class="bio-input bot-left" type="text" :value="selectedMember.tanggal_bergabung">
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
              <input class="bio-input bot-left" type="text" :value="selectedMember.fanbase">
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
              <input class="bio-input bot-left" type="text" :value="selectedMember.universitas">
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
              <input class="bio-input bot-left" type="text" :value="selectedMember.jurusan">
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
              <input class="bio-input bot-right" type="text" :value="selectedMember.umur">
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
              <input class="bio-input bot-right" type="text" :value="selectedMember.tanggal_lahir">
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
              <input class="bio-input bot-right" type="text" :value="selectedMember.kota_lahir">
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
              <input class="bio-input bot-right" type="text" :value="selectedMember.asal">
            </div>
          </transition>
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
          <a
            :href="
              'https://www.instagram.com/' + selectedMember.username_ig + '/'
            "
            class="text-decoration-none fw-lighter text-white ms-1"
            >{{ selectedMember.username_ig }}</a
          >
        </div>
        <div class="d-flex align-items-center">
          <img src="../assets/IDN.png" style="height: 22px" alt="IDN" />
          <a
            :href="'https://idn.onelink.me/VKUf/' + idnUsername"
            class="text-decoration-none fw-lighter text-white ms-1"
            >{{ selectedMember.username_idn }}</a
          >
        </div>
        <div class="d-flex align-items-center">
          <img
            src="../assets/tiktok.png"
            style="height: 22px; border-radius: 5px"
            alt="tiktok"
          />
          <a
            :href="
              'https://www.tiktok.com/@' + selectedMember.username_tiktok + '/'
            "
            class="text-decoration-none fw-lighter text-white ms-1"
            >{{ selectedMember.username_tiktok }}</a
          >
        </div>
        <div class="d-flex align-items-center">
          <img
            src="../assets/SR.png"
            style="height: 22px; border-radius: 5px"
            alt="showroom"
          />
          <a
            :href="'https://www.showroom-live.com/r/JKT48_' + showroomUsername"
            class="text-decoration-none fw-lighter text-white ms-1"
            >{{ selectedMember.username_sr }}</a
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
            :href="'https://www.twitter.com/' + selectedMember.username_x + '/'"
            class="text-decoration-none fw-lighter text-white ms-1"
            >{{ selectedMember.username_x }}</a
          >
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

.bio-input{
    font-size: 1.7rem;
    background-color: transparent;
    border: 1px solid #6c6c6c;
    padding: .4rem .7rem .2rem;
    color: #F8F9FA;
    border-radius: 7px;
}

.bio-input.bot-left{
    width: 38.35rem;
}

.bio-input.bot-right{
    text-align: right;
    width: 18rem;
}
</style>
