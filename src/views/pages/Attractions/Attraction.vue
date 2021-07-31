<template>
  <div>
    <b-container class="my-5">
      <lightbox
        css="h-400"
        :cells="3"
        :items="images"
        class="hide-mobile"
      ></lightbox>

      <lightbox
        css="h-200"
        :cells="3"
        :items="images"
        class="hide-desktop"
      ></lightbox>

      <b-card class="mb-3" bg-variant="light">
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
            <i class="fa fa-map-marker mr-1 hide-desktop" style="color : red" />
            <span class="hide-mobile">
              <b-button variant="outline-info" class="m-1"
                ><i class="fa fa-map-marker mr-1" />ดูแผนที่</b-button
              >
            </span>
          </a>
        </b-card-text>
        <b-card-text>
          <span class="mr-3">
            <i class="fas fa-building" v-if="result.org"></i>
            {{ result.org ? result.org : "-" }}
          </span>

          <span v-if="result.phone">
            <i class="fas fa-phone-volume mr-1"></i>
            <a :href="'tel:' + result.phone">{{ result.phone }}</a>
          </span>
          <span v-else>-</span>
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

      <b-row>
        <b-col md="4" cols="12">
          <b-card
            class="mb-3"
            bg-variant="light"
            header="สิ่งดึงดูดใจ (Attraction)"
            header-tag="header"
          >
            <b-card-text v-html="result.physical"> </b-card-text>
          </b-card>
        </b-col>
        <b-col md="4" cols="12">
          <b-card
            class="mb-3"
            bg-variant="light"
            header="การเดินทางเข้าถึง (Accessibility)"
            header-tag="header"
          >
            <b-card-text v-html="result.physical"> </b-card-text>
            <b-card-text>
              <a
                :href="
                  `http://maps.apple.com/maps?q=${result.lat},${result.lon}`
                "
                target="_blank"
              >
                <b-button variant="outline-info" class="m-1"
                  ><i class="fa fa-map-marker mr-1" />ดูแผนที่</b-button
                >
              </a>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="4" cols="12">
          <b-card
            class="mb-3"
            bg-variant="light"
            header="การบริการที่พัก (Accommodation)"
            header-tag="header"
          >
            <b-card-text v-html="result.physical"> </b-card-text>
          </b-card>
        </b-col>
        <b-col md="4" cols="12">
          <b-card
            class="mb-3"
            bg-variant="light"
            header="กิจกรรมการท่องเที่ยว (Activities)"
            header-tag="header"
          >
            <b-card-text>
              <b-badge variant="success"> {{ result.category }}</b-badge>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="4" cols="12">
          <b-card
            class="mb-3"
            bg-variant="light"
            header="สิ่งอำนวยความสะดวก (Amenities)"
            header-tag="header"
          >
            <b-card-text>
              <b-badge variant="success"> {{ result.category }}</b-badge>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="4" cols="12">
          <b-card
            class="mb-3"
            bg-variant="light"
            header="เดือนสำหรับการท่องเที่ยว"
            header-tag="header"
          >
            <b-row>
              <b-col>
                <b-card-text>
                  <i class="fas fa-check" style="color : green"></i> มกราคม
                </b-card-text>
                <b-card-text>
                  <i class="fas fa-check" style="color : green"></i> กุมภาพันธ์
                </b-card-text>
                <b-card-text>
                  <i class="fas fa-check" style="color : green"></i> มีนาคม
                </b-card-text>
                <b-card-text>
                  <i class="fas fa-check" style="color : green"></i> เมษายน
                </b-card-text>
                <b-card-text>
                  <i class="fas fa-check" style="color : green"></i> พฤษภาคม
                </b-card-text>
                <b-card-text>
                  <i class="fas fa-check" style="color : green"></i> มิถุนายน
                </b-card-text>
              </b-col>
              <b-col>
                <b-card-text>
                  <i class="fas fa-times" style="color : red"></i> กรกฎาคม
                </b-card-text>
                <b-card-text>
                  <i class="fas fa-times" style="color : red"></i> สิงหาคม
                </b-card-text>
                <b-card-text>
                  <i class="fas fa-times" style="color : red"></i> กันยายน
                </b-card-text>
                <b-card-text>
                  <i class="fas fa-times" style="color : red"></i> ตุลาคม
                </b-card-text>
                <b-card-text>
                  <i class="fas fa-times" style="color : red"></i> พฤศจิกายน
                </b-card-text>
                <b-card-text>
                  <i class="fas fa-times" style="color : red"></i> ธันวาคม
                </b-card-text>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
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
        "https://mpics.mgronline.com/pics/Images/563000002225701.JPEG",
        "https://mpics.mgronline.com/pics/Images/563000009609401.JPEG",
        "https://bottomlineis.co/uploads/images/image_750x_5d9de55a90e2a.jpg",
        "https://www.trekkingthai.com/wp-content/uploads/2014/12/img_0511-1000x667.jpg",
      ];
    },
  },
  async mounted() {
    this.fetch();
  },
};
</script>
