<template>
  <navbar
    @search="(valueObject) => (searchObject = valueObject)"
    @clearSearch="clearSearch"
  ></navbar>
  <cards
    type="Member"
    :isMember="true"
    :members="filteredMembers"
    @sendID="(i, isTrainee) => ((index = i), (isMember = !isTrainee))"
  ></cards>
  <cards
    type="Trainee"
    :isMember="false"
    :members="filteredTrainees"
    @sendID="(i, isTrainee) => ((index = i), (isMember = !isTrainee))"
  ></cards>
  <footer-copyright></footer-copyright>

  <modal
    :type="isMember ? 'member' : 'trainee'"
    v-if="member[index] || trainee[index]"
    :nama="isMember ? member[index].nama : trainee[index].nama"
    :foto="isMember ? member[index].foto : trainee[index].foto"
    :umur="isMember ? member[index].umur : trainee[index].umur"
    :asal="isMember ? member[index].asal : trainee[index].asal"
    :generasi="isMember ? member[index].generasi : trainee[index].generasi"
    :tanggal_lahir="
      isMember ? member[index].tanggal_lahir : trainee[index].tanggal_lahir
    "
    :universitas="
      isMember ? member[index].universitas : trainee[index].universitas
    "
    :jurusan="isMember ? member[index].jurusan : trainee[index].jurusan"
  ></modal>
</template>

<script>
import axios from "axios";
import Modal from "../components/Modal.vue";
import Navbar from "../components/Navbar.vue";
import FooterCopyright from "../components/FooterCopyright.vue";
import GenFormat from "../components/GenFormat.vue";
import Cards from "../components/Cards.vue";
import { faL } from "@fortawesome/free-solid-svg-icons";

export default {
  components: { Modal, Navbar, Cards, GenFormat, FooterCopyright },
  data() {
    return {
      member: [],
      trainee: [],
      index: 1,
      type: true,
      isMember: true,
      searchObject: {
        nama: "",
        umur: "",
        generasi: "",
        asal: "",
        universitas: "",
      },
    };
  },

  async mounted() {
    try {
      const res = await axios.get("jkt48.member.json");
      this.member = res.data.member;
      this.trainee = res.data.trainee;
    } catch (error) {
      console.log(error);
    }
    console.log(this.member);
    console.log(this.trainee);
  },

  methods: {
    sendID(type, i) {
      this.type = type;
      this.index = i;
    },
    clearSearch() {
      this.searchObject.nama = "";
      this.searchObject.umur = "";
      this.searchObject.generasi = "";
      this.searchObject.asal = "";
      this.searchObject.universitas = "";
    },
  },

  computed: {
    filteredMembers() {
      let searchParams = this.searchObject;

      return this.member.filter((item) => {
        return Object.entries(searchParams).every(([key, value]) => {
          const itemValue = item[key];
          const searchValue = value;

          return (
            searchValue === "" ||
            (searchValue === "-"
              ? itemValue === searchValue
              : itemValue == searchValue)
          );
        });
      });
    },
    filteredTrainees() {
      let searchParams = this.searchObject;

      return this.trainee.filter((item) => {
        return Object.entries(searchParams).every(([key, value]) => {
          const itemValue = item[key];
          const searchValue = value;

          return (
            searchValue === "" ||
            (searchValue === "-"
              ? itemValue === searchValue
              : itemValue == searchValue)
          );
        });
      });
    },
  },
};
</script>
