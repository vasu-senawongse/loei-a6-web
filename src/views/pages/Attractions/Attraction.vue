<template>
  <div>
    <b-container class="my-5">
      <lightbox css="h-500" :cells="5" :items="images"></lightbox>

      <b-card class="mb-3">
        <b-card-text>
          <b-badge variant="success"> {{ result.category }}</b-badge>
        </b-card-text>
        <b-card-text
          ><h3>{{ result.name }}</h3></b-card-text
        >
        <b-card-text>
          {{ `ตำบล${result.subDistrict} อำเภอ${result.district} จังหวัดเลย` }}

          <a
            :href="`http://maps.apple.com/maps?q=${result.lat},${result.lon}`"
            target="_blank"
          >
            <b-button variant="outline-info" class="m-1"
              ><i class="fa fa-map-marker mr-1" />ดูแผนที่</b-button
            ></a
          >
        </b-card-text>
        <b-card-text>
          <span class="mr-3">
            <i class="fas fa-building" v-if="result.org"></i>
            {{ result.org ? result.org : "-" }}
          </span>
          <span>
            <i class="fas fa-phone-volume" v-if="result.phone"></i>
            {{ result.phone ? result.phone : "-" }}
          </span>
        </b-card-text>
      </b-card>
      <h4>ข้อมูลทางกายภาพ</h4>
      <div v-html="result.physical"></div>

      <h4>ข้อมูลทางประวัติศาสตร์</h4>
      <div v-html="result.history"></div>

      <h4>ข้อมูลทางวัฒนธรรม</h4>
      <div v-html="result.culture"></div>

      <h4>ข้อมูลทางธรรมชาติ</h4>
      <div v-html="result.nature"></div>
    </b-container>
  </div>
</template>
<script>
import api from "@/services/api.js";
export default {
  name: "attraction",

  data() {
    return {
      result: {},
      apiRoute: `attractions/get-attraction-by-name/${this.$route.params.name}`,
      imgPath:
        process.env.VUE_APP_IMAGE_STORAGE_URL || "http://localhost:5000/images",
      images: [],
    };
  },
  methods: {
    async fetch() {
      let res = await api.get(this.apiRoute);
      this.result = res.data;
      this.images = [
        this.imgPath + this.result.img,
        this.imgPath + this.result.img,
        this.imgPath + this.result.img,
        this.imgPath + this.result.img,
        this.imgPath + this.result.img,
        this.imgPath + this.result.img,
      ];
    },
  },
  async mounted() {
    this.fetch();
  },
};
</script>
