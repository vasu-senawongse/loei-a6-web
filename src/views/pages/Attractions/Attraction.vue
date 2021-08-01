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
          <b-badge
            class="mr-2"
            :style="getCategoryColor(c)"
            v-for="(c, index) in result && result.category"
            v-bind:key="'c-' + index"
          >
            {{ c }}</b-badge
          >
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
        <b-col md="4" cols="12" class="mb-3">
          <b-card
            bg-variant="light"
            header="สิ่งดึงดูดใจ (Attraction)"
            header-tag="header"
          >
            <b-card-text v-html="result.attraction"> </b-card-text>
          </b-card>
        </b-col>
        <b-col md="4" cols="12" class="mb-3">
          <b-card
            bg-variant="light"
            header="การเดินทางเข้าถึง (Accessibility)"
            header-tag="header"
          >
            <b-card-text v-html="result.accessibility"> </b-card-text>
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
        <b-col md="4" cols="12" class="mb-3">
          <b-card
            bg-variant="light"
            header="การบริการที่พัก (Accommodation)"
            header-tag="header"
          >
            <b-card-text v-html="result.accommodation"> </b-card-text>
          </b-card>
        </b-col>
        <b-col md="4" cols="12" class="mb-3">
          <b-card
            bg-variant="light"
            header="กิจกรรมการท่องเที่ยว (Activities)"
            header-tag="header"
          >
            <b-card-text>
              <div v-for="a in result.activities" v-bind:key="'act-' + a">
                {{ a }}
              </div>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="4" cols="12" class="mb-3">
          <b-card
            bg-variant="light"
            header="สิ่งอำนวยความสะดวก (Amenities)"
            header-tag="header"
          >
            <b-card-text>
              <div v-for="a in result.amenities" v-bind:key="'amen-' + a">
                {{ a }}
              </div>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="4" cols="12" class="mb-3">
          <b-card
            bg-variant="light"
            header="เดือนสำหรับการท่องเที่ยว"
            header-tag="header"
          >
            <b-row>
              <b-col>
                <b-card-text v-for="i in 6" v-bind:key="i">
                  <i
                    class="fas fa-times"
                    style="color : red"
                    v-if="travelMonth.length > 0 && !travelMonth[i - 1].value"
                  ></i>
                  <i
                    class="fas fa-check"
                    style="color : green"
                    v-if="travelMonth.length > 0 && travelMonth[i - 1].value"
                  ></i>
                  {{ travelMonth.length > 0 && travelMonth[i - 1].month }}
                </b-card-text>
              </b-col>
              <b-col>
                <b-card-text v-for="i in 6" v-bind:key="i">
                  <i
                    class="fas fa-times"
                    style="color : red"
                    v-if="travelMonth.length > 0 && !travelMonth[i + 5].value"
                  ></i>
                  <i
                    class="fas fa-check"
                    style="color : green"
                    v-if="travelMonth.length > 0 && travelMonth[i + 5].value"
                  ></i>
                  {{ travelMonth.length > 0 && travelMonth[i + 5].month }}
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
      imgRoute: `attractions/get-attraction-gallery-by-id/`,
      imgPath:
        process.env.VUE_APP_IMAGE_STORAGE_URL || "http://localhost:5000/images",
      images: [],
      travelMonth: [],
      months: [
        {
          value: 1,
          text: "มกราคม",
        },
        {
          value: 2,
          text: "กุมภาพันธ์",
        },
        {
          value: 3,
          text: "มีนาคม",
        },
        {
          value: 4,
          text: "เมษายน",
        },
        {
          value: 5,
          text: "พฤษภาคม",
        },
        {
          value: 6,
          text: "มิถุนายน",
        },
        {
          value: 7,
          text: "กรกฎาคม",
        },
        {
          value: 8,
          text: "สิงหาคม",
        },
        {
          value: 9,
          text: "กันยายน",
        },
        {
          value: 10,
          text: "ตุลาคม",
        },

        {
          value: 11,
          text: "พฤศจิกายน",
        },
        {
          value: 12,
          text: "ธันวาคม",
        },
      ],
    };
  },
  methods: {
    getCategoryColor(c) {
      var types = [
        { text: "เชิงนิเวศ", color: "#028A0F" },
        { text: "ทางธรรมชาติ", color: "#03C04A" },
        { text: "ทางประวัติศาสตร์", color: "#795644" },
        { text: "ทางวัฒนธรรม", color: "#FACA0F" },
        { text: "โดยชุมชน", color: "#FC46AA" },
        { text: "เชิงเกษตร", color: "#466D1D" },
        { text: "เพื่อนันทนาการ", color: "#7C5295" },
        { text: "เชิงสุขภาพ", color: "016064" },
        { text: "ทางศิลปวิทยาการ", color: "#FF6600" },
        { text: "จุดหมายตา", color: "#63C5DA" },
      ];

      var result = types.filter((i) => i.text == c)[0];
      return { "background-color": result.color };
    },
    async fetch() {
      let res = await api.get(this.apiRoute);
      this.result = res.data;
      this.result.month = this.result.month.split(",");
      this.result.category = this.result.category.split(",");
      this.result.activities = this.result.activities.split(",");
      this.result.amenities = this.result.amenities.split(",");
      let res2 = await api.get(this.imgRoute + this.result.id);
      var gallery = res2.data;
      gallery.forEach((i) => {
        this.images.push(this.imgPath + i.img);
      });
      this.months.forEach((i) => {
        if (this.result.month.includes(i.value.toString()))
          this.travelMonth.push({ month: i.text, value: true });
        else this.travelMonth.push({ month: i.text, value: false });
      });
    },
  },
  async mounted() {
    this.fetch();
  },
};
</script>
