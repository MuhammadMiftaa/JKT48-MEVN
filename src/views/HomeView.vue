<template>
  <navbar
    @search="(valueObject) => (searchObject = valueObject)"
    @clearSearch="clearSearch"
  ></navbar>
  <cards
    type="Member"
    :isMember="true"
    :members="filteredMembers"
    @sendID="
      (i, isTrainee) => (
        (this.modalMember = this.allMember.find((m) => {
          return m._id.$oid === i;
        })),
        (isMember = !isTrainee)
      )
    "
  ></cards>
  <cards
    type="Trainee"
    :isMember="false"
    :members="filteredTrainees"
    @sendID="
      (i, isTrainee) => (
        (this.modalMember = this.allMember.find((m) => {
          return m._id.$oid === i;
        })),
        (isMember = !isTrainee)
      )
    "
  ></cards>
  <footer-copyright></footer-copyright>

  <modal
    :type="isMember ? 'member' : 'trainee'"
    v-if="modalMember"
    :nama="modalMember.nama"
    :foto="modalMember.foto"
    :umur="modalMember.umur"
    :asal="modalMember.asal"
    :generasi="modalMember.generasi"
    :tanggal_lahir="modalMember.tanggal_lahir"
    :universitas="modalMember.universitas"
    :jurusan="modalMember.jurusan"
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
      allMember: [],
      member: [],
      trainee: [],
      type: true,
      isMember: true,
      searchObject: {
        nama: "",
        umur: "",
        generasi: "",
        asal: "",
        universitas: "",
      },
      modalMember: {},
    };
  },

  async mounted() {
    try {
      const res = await axios.get("jkt48.member.json");
      this.allMember = res.data;
      this.member = res.data.filter((e) => {
        return e.member_regular === true;
      });
      this.trainee = res.data.filter((e) => {
        return e.member_regular === false;
      });
      console.log(this.allMember);
      console.log(this.member);
      console.log(this.trainee);
    } catch (error) {
      console.log(error);
    }
    console.log(this.member);
    console.log(this.trainee);
  },

  methods: {
    sendID(type, i) {
      this.type = type;
      this.modalMember = this.member.concat(this.trainee).find((m) => {
        return m._id.$oid === i;
      });
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
    selectedMember() {
      const id = this.index;
      this.modalMember = this.member.concat(this.trainee).find((m) => {
        return m._id.$oid === id;
      });
    },
  },
};
</script>
