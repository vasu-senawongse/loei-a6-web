<template>
  <div class="home-body">
    <b-container class="my-5" style="background-color : white">
      <h3 style="color:black">ผลิตภัณฑ์และสินค้า</h3>
      <b-table
        hover
        :items="result"
        :fields="fields"
        responsive
        small
        id="emergency-list"
        style="width: 100%"
      >
        <template v-slot:cell(img)="data">
          <div style="width:150px">
            <img :src="imgPath + data.item.img" class="fit-image" />
          </div>
        </template>

        <template v-slot:cell(phone)="data">
          <span v-if="data.item.phone">
            <a :href="'tel:' + data.item.phone">{{ data.item.phone }}</a></span
          ></template
        >
      </b-table>
    </b-container>
  </div>
</template>
<script>
import api from "@/services/api.js";
export default {
  name: "gifts",
  data() {
    return {
      fields: [
        {
          key: "img",
          label: "",
          class: "text-left align-middle w-180",
          stickyColumn: true,
        },
        {
          key: "name",
          label: "ชื่อผลิตภัณฑ์หรือสินค้า",
          class: "text-left align-middle w-180",
        },
        {
          key: "description",
          label: "คำอธิบาย",
          class: "text-left align-middle w-180",
        },
        {
          key: "shop",
          label: "ชื่อร้านค้า",
          class: "text-left align-middle w-180",
        },
        {
          key: "phone",
          label: "เบอร์ติดต่อ",
          class: "text-left align-middle w-180",
        },
      ],
      currentPage: 1,
      perPage: 10,
      apiRoute: `products/get-products`,

      result: [],

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
