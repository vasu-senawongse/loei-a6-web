<template>
  <div class="home-body">
    <h3 class="text-center">
      หน่วยงาน อพท.
    </h3>
    <b-row class="justify-content-center m-5">
      <b-col
        cols="12"
        lg="2"
        class="zoom-box my-3"
        v-for="org in result.filter((i) => i.type == 1)"
        v-bind:key="org.id"
      >
        <a :href="org.url" target="_blank">
          <img :src="imgPath + org.img" width="80%"/></a
      ></b-col>
    </b-row>
    <h3 class="text-center">
      หน่วยงานในจังหวััดเลย
    </h3>
    <b-row class="justify-content-center m-5">
      <b-col
        cols="12"
        lg="2"
        class="zoom-box my-3"
        v-for="org in result.filter((i) => i.type == 2)"
        v-bind:key="org.id"
      >
        <a :href="org.url" target="_blank">
          <img :src="imgPath + org.img" width="80%"/></a
      ></b-col>
    </b-row>
    <h3 class="text-center">
      หน่วยงานส่วนกลาง
    </h3>
    <b-row class="justify-content-center m-5">
      <b-col
        cols="12"
        lg="2"
        class="zoom-box my-3"
        v-for="org in result.filter((i) => i.type == 3)"
        v-bind:key="org.id"
      >
        <a :href="org.url" target="_blank">
          <img :src="imgPath + org.img" width="80%"/></a
      ></b-col>
    </b-row>
  </div>
</template>
<script>
import api from "@/services/api.js";
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
export default {
  name: "attraction",
  components: {
    quillEditor,
  },
  data() {
    return {
      result: [],
      apiRoute: `organizations/get-organizations`,
      imgPath:
        process.env.VUE_APP_IMAGE_STORAGE_URL || "http://localhost:5000/images",
    };
  },
  methods: {
    async fetch() {
      let res = await api.get(this.apiRoute);
      this.result = res.data;
    },
  },
  async mounted() {
    this.fetch();
  },
};
</script>
