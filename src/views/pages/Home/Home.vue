<template>
  <div class="mb-5">
    <div class="home-body hide-mobile">
      <b-row class="home-search justify-content-center nav-text ">
        <b-col md="4" cols="12" class="form-background">
          <b-row
            class="justify-content-center text-center"
            align-v="center"
            style="height:100%"
          >
            <b-col md="4" sm="6" cols="12">
              <div>
                <i
                  class="fa fa-map-marker rounded-icon"
                  :style="
                    selectedChoice != 'ทรัพยากรการท่องเที่ยว'
                      ? { 'background-color': 'gray' }
                      : { 'background-color': choices[0].color }
                  "
                  @click="selectedChoice = 'ทรัพยากรการท่องเที่ยว'"
                />
              </div>
              <div class="text-center">
                ทรัพยากรการท่องเที่ยว
              </div></b-col
            >
            <b-col md="4" sm="6" cols="12">
              <div>
                <i
                  class="fas fa-hotel rounded-icon"
                  :style="
                    selectedChoice != 'ที่พัก'
                      ? { 'background-color': 'gray' }
                      : { 'background-color': choices[1].color }
                  "
                  @click="selectedChoice = 'ที่พัก'"
                />
              </div>
              <div class="text-center">
                ที่พัก
              </div></b-col
            >
            <b-col md="4" cols="12">
              <div>
                <i
                  class="fas fa-utensils rounded-icon"
                  :style="
                    selectedChoice != 'ร้านอาหาร'
                      ? { 'background-color': 'gray' }
                      : { 'background-color': choices[2].color }
                  "
                  @click="selectedChoice = 'ร้านอาหาร'"
                />
              </div>
              <div class="text-center">
                ร้านอาหาร
              </div></b-col
            >
          </b-row>
        </b-col>
        <b-col md="4" cols="12" class="form-background">
          <b-row class="justify-content-center">
            <b-col md="9" cols="12" class="pt-3">
              <div>
                <div class="text-center pt-3">
                  <h4>ค้นหาข้อมูล{{ selectedChoice }}</h4>
                </div>

                <b-input-group class="my-4">
                  <b-form-input
                    alternative
                    type="text"
                    placeholder="ค้นหาจากชื่อ"
                    v-model="location"
                    style="height : 40px"
                  >
                  </b-form-input>
                  <b-input-group-prepend style="height : 40px;">
                    <span class="input-group-text" style="width : 100%"
                      ><i class="fa fa-search"></i
                    ></span>
                  </b-input-group-prepend>
                </b-input-group>

                <b-input-group class="my-4">
                  <b-form-select
                    alternative
                    addon-left-icon="ni
            ni-lock-circle-open"
                    v-model="district"
                    style="height : 40px"
                    :options="options"
                  />

                  <b-input-group-prepend style="height : 40px;">
                    <span class="input-group-text" style="width : 100%"
                      ><i class="fa fa-map-marker"></i
                    ></span>
                  </b-input-group-prepend>
                </b-input-group>

                <b-input-group
                  class="my-4"
                  v-if="selectedChoice == 'ทรัพยากรการท่องเที่ยว'"
                >
                  <b-form-select
                    alternative
                    addon-left-icon="ni
            ni-lock-circle-open"
                    v-model="category"
                    style="height : 40px"
                    :options="types"
                  />

                  <b-input-group-prepend style="height : 40px;">
                    <span class="input-group-text" style="width : 100%"
                      ><i class="far fa-object-group"></i
                    ></span>
                  </b-input-group-prepend>
                </b-input-group>

                <div class="text-center">
                  <b-button class="my-4 w-100" variant="info" @click="search()"
                    >ค้นหา</b-button
                  >
                </div>
              </div>
            </b-col>
          </b-row></b-col
        >
      </b-row>
    </div>
    <div class="home-body p-3 nav-text hide-desktop">
      <div class="text-center pt-3">
        <h4>ค้นหาข้อมูล{{ selectedChoice }}</h4>
      </div>

      <b-row class="justify-content-center text-center my-4">
        <b-col md="4" cols="4">
          <div>
            <i
              class="fa fa-map-marker rounded-icon"
              :style="
                selectedChoice != 'ทรัพยากรการท่องเที่ยว'
                  ? { 'background-color': 'gray' }
                  : { 'background-color': choices[0].color }
              "
              @click="selectedChoice = 'ทรัพยากรการท่องเที่ยว'"
            />
          </div>
        </b-col>
        <b-col md="4" cols="4">
          <div>
            <i
              class="fas fa-hotel rounded-icon"
              :style="
                selectedChoice != 'ที่พัก'
                  ? { 'background-color': 'gray' }
                  : { 'background-color': choices[1].color }
              "
              @click="selectedChoice = 'ที่พัก'"
            />
          </div>
        </b-col>
        <b-col md="4" cols="4">
          <div>
            <i
              class="fas fa-utensils rounded-icon"
              :style="
                selectedChoice != 'ร้านอาหาร'
                  ? { 'background-color': 'gray' }
                  : { 'background-color': choices[2].color }
              "
              @click="selectedChoice = 'ร้านอาหาร'"
            />
          </div>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col md="4" cols="12">
          <b-row class="justify-content-center">
            <b-col md="9" cols="12" class="pt-3">
              <div>
                <b-input-group class="my-4">
                  <b-form-input
                    alternative
                    type="text"
                    placeholder="ค้นหาจากชื่อ"
                    v-model="location"
                    style="height : 40px"
                  >
                  </b-form-input>
                  <b-input-group-prepend style="height : 40px;">
                    <span class="input-group-text" style="width : 100%"
                      ><i class="fa fa-search"></i
                    ></span>
                  </b-input-group-prepend>
                </b-input-group>

                <b-input-group class="my-4">
                  <b-form-select
                    alternative
                    addon-left-icon="ni
            ni-lock-circle-open"
                    v-model="district"
                    style="height : 40px"
                    :options="options"
                  />

                  <b-input-group-prepend style="height : 40px;">
                    <span class="input-group-text" style="width : 100%"
                      ><i class="fa fa-map-marker"></i
                    ></span>
                  </b-input-group-prepend>
                </b-input-group>

                <b-input-group
                  class="my-4"
                  v-if="selectedChoice == 'ทรัพยากรการท่องเที่ยว'"
                >
                  <b-form-select
                    alternative
                    addon-left-icon="ni
            ni-lock-circle-open"
                    v-model="category"
                    style="height : 40px"
                    :options="types"
                  />

                  <b-input-group-prepend style="height : 40px;">
                    <span class="input-group-text" style="width : 100%"
                      ><i class="far fa-object-group"></i
                    ></span>
                  </b-input-group-prepend>
                </b-input-group>
              </div>
            </b-col> </b-row
        ></b-col>
      </b-row>

      <div class="text-center">
        <b-button class="my-4 w-100" variant="info" @click="search()"
          >ค้นหา</b-button
        >
      </div>
    </div>

    <b-container class="my-5 search-result" ref="dataResult">
      <div class="text-center text-danger" v-if="isBusy == true">
        <b-spinner class="align-middle m-2"></b-spinner>
        <strong>กำลังค้นหา...</strong>
      </div>
      <div
        v-else-if="result.length == 0 && isSearch == true"
        class="text-center"
      >
        <h1>- ไม่มีข้อมูลใดที่ตรงกับตัวกรองของคุณ -</h1>
      </div>

      <div
        v-if="isBusy == false && selectedChoice == 'ทรัพยากรการท่องเที่ยว'"
        class="hide-desktop"
      >
        <b-row>
          <b-col
            md="12"
            cols="12"
            v-for="(p, index) in result"
            v-bind:key="index"
          >
            <b-card
              :img-src="imgPath + p.img"
              img-alt="Card image"
              img-top
              img-height="200"
              img-width="250"
              class="mb-3"
            >
              <b-card-text
                ><h3>{{ p.name }}</h3></b-card-text
              >

              <b-card-text
                >ที่ตั้ง:
                {{ `ตำบล${p.subDistrict} อำเภอ${p.district} จังหวัดเลย` }}
              </b-card-text>
              <b-card-text>
                โทร:
                <span v-if="result.phone">
                  <a :href="'tel:' + p.phone">{{ p.phone }}</a>
                </span>
                <span v-else>-</span>
              </b-card-text>
              <a :href="'/attractions/' + p.name.replace(' ', '-')">
                <b-button variant="info" class="m-1">ดูรายละเอียด</b-button></a
              >
              <a
                :href="`http://maps.apple.com/maps?q=${p.lat},${p.lon}`"
                target="_blank"
              >
                <b-button variant="outline-info" class="m-1"
                  ><i class="fa fa-map-marker mr-1" />ดูแผนที่</b-button
                ></a
              >
            </b-card>
          </b-col>
        </b-row>
      </div>

      <div
        v-if="
          isBusy == false &&
            selectedChoice == 'ทรัพยากรการท่องเที่ยว' &&
            isSearch == true
        "
        class="hide-mobile"
      >
        <b-row>
          <b-col
            md="12"
            cols="12"
            v-for="(p, index) in result"
            v-bind:key="index"
          >
            <b-card
              :img-src="imgPath + p.img"
              img-alt="Card image"
              img-left
              img-height="200"
              img-width="300"
              class="mb-3"
            >
              <b-card-text
                ><h2>{{ p.name }}</h2></b-card-text
              >

              <b-card-text>
                ที่ตั้ง:
                {{ `ตำบล${p.subDistrict} อำเภอ${p.district} จังหวัดเลย` }}
              </b-card-text>
              <b-card-text>
                โทร:
                <span v-if="p.phone">
                  <a :href="'tel:' + p.phone">{{ p.phone }}</a>
                </span>
                <span v-else>-</span>
              </b-card-text>
              <a :href="'/attractions/' + p.name.replace(' ', '-')"
                ><b-button variant="info" class="m-1">ดูรายละเอียด</b-button></a
              >
              <a
                :href="`http://maps.apple.com/maps?q=${p.lat},${p.lon}`"
                target="_blank"
              >
                <b-button variant="outline-info" class="m-1"
                  ><i class="fa fa-map-marker mr-1" />ดูแผนที่</b-button
                ></a
              >
            </b-card>
          </b-col>
        </b-row>
      </div>
      <div
        v-if="
          isBusy == false &&
            selectedChoice == 'ที่พัก' &&
            isSearch == true &&
            result &&
            result.length > 0
        "
      >
        <b-table
          hover
          :items="result"
          :fields="hotelfields"
          responsive
          small
          id="hotel-list"
          :per-page="perPage"
          :current-page="currentPage"
          style="width: 100%"
        >
          <template v-slot:cell(location)="data">
            <span
              >ตำบล{{ data.item.subDistrict }} อำเภอ{{
                data.item.district
              }}
              จังหวัดเลย</span
            ></template
          >

          <template v-slot:cell(phone)="data">
            <span>
              <a :href="'tel:' + data.item.phone">{{
                data.item.phone
              }}</a></span
            ></template
          >

          <template v-slot:cell(btn)="data">
            <span>
              <a :href="data.item.url"
                ><b-button variant="info" class="m-1"
                  >ดูแหล่งอ้างอิง</b-button
                ></a
              >
              <a
                :href="
                  `http://maps.apple.com/maps?q=${data.item.lat},${data.item.lon}`
                "
                target="_blank"
              >
                <b-button variant="outline-info" class="m-1"
                  ><i class="fa fa-map-marker mr-1" />ดูแผนที่</b-button
                ></a
              ></span
            ></template
          >
        </b-table>
        <b-pagination
          v-model="currentPage"
          :total-rows="result.length"
          :per-page="perPage"
          aria-controls="hotel-list"
          style="float:right"
        ></b-pagination>
      </div>
      <div
        v-if="
          isBusy == false &&
            selectedChoice == 'ร้านอาหาร' &&
            isSearch == true &&
            result &&
            result.length > 0
        "
      >
        <b-table
          hover
          :items="result"
          :fields="resfields"
          responsive
          small
          id="restaurant-list"
          :per-page="perPage"
          :current-page="currentPage"
          style="width: 100%"
        >
          <template v-slot:cell(location)="data">
            <span
              >ตำบล{{ data.item.subDistrict }} อำเภอ{{
                data.item.district
              }}
              จังหวัดเลย</span
            ></template
          >

          <template v-slot:cell(phone)="data">
            <span>
              <a :href="'tel:' + data.item.phone">{{
                data.item.phone
              }}</a></span
            ></template
          >

          <template v-slot:cell(btn)="data">
            <span>
              <a :href="data.item.url"
                ><b-button variant="info" class="m-1"
                  >ดูแหล่งอ้างอิง</b-button
                ></a
              >
              <a
                :href="
                  `http://maps.apple.com/maps?q=${data.item.lat},${data.item.lon}`
                "
                target="_blank"
              >
                <b-button variant="outline-info" class="m-1"
                  ><i class="fa fa-map-marker mr-1" />ดูแผนที่</b-button
                ></a
              ></span
            ></template
          >
        </b-table>
        <b-pagination
          v-model="currentPage"
          :total-rows="result.length"
          :per-page="perPage"
          aria-controls="restaurant-list"
          style="float:right"
        ></b-pagination>
      </div>
    </b-container>
  </div>
</template>
<script>
import api from "@/services/api.js";
export default {
  name: "home",
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      location: "",
      district: "",
      category: "",
      isBusy: false,
      hotelfields: [
        {
          key: "name",
          label: "ชื่อที่พัก",
          class: "text-left align-middle w-180 stay-behind",
          stickyColumn: true,
        },
        {
          key: "room",
          label: "จำนวนห้องพัก",
          class: "text-left align-middle w-180",
        },
        {
          key: "location",
          label: "ที่อยู่",
          class: "text-left align-middle w-180",
        },
        {
          key: "phone",
          label: "เบอร์ติดต่อ",
          class: "text-left align-middle w-180",
        },
        {
          key: "btn",
          label: "",
          class: "text-left align-middle w-180",
        },
      ],

      resfields: [
        {
          key: "name",
          label: "ชื่อร้านอาหาร",
          class: "text-left align-middle w-180",
          stickyColumn: true,
        },
        {
          key: "location",
          label: "ที่อยู่",
          class: "text-left align-middle w-180",
        },
        {
          key: "phone",
          label: "เบอร์ติดต่อ",
          class: "text-left align-middle w-180",
        },
        {
          key: "btn",
          label: "",
          class: "text-left align-middle w-180",
        },
      ],
      options: [
        { text: "ทุกอำเภอ", value: "" },
        "เชียงคาน",
        "เมืองเลย",
        "เอราวัณ",
        "ด่านซ้าย",
        "ท่าลี่",
        "นาแห้ว",
        "นาด้วง",
        "ปากชม",
        "ผาขาว",
        "ภูเรือ",
        "ภูกระดึง",
        "ภูหลวง",
        "วังสะพุง",
        "หนองหิน",
      ],
      types: [{ text: "ทุกประเภท", value: "" }],
      selectedChoice: "ทรัพยากรการท่องเที่ยว",
      choices: [{ color: "orange" }, { color: "green" }, { color: "pink" }],
      result: [],
      isSearch: false,
      imgPath:
        process.env.VUE_APP_IMAGE_STORAGE_URL || "http://localhost:5000/images",
    };
  },
  watch: {
    selectedChoice() {
      this.isSearch = false;
      this.result = [];
      this.location = "";
      this.category = "";
      this.currentPage = 1;
    },
  },
  methods: {
    async search() {
      this.isBusy = true;
      if (this.isSearch == false) {
        this.isSearch = true;
      }
      var route = null;
      if (this.selectedChoice == "ทรัพยากรการท่องเที่ยว")
        route = `attractions/get-attractions-by-filter?district=${this.district}&category=${this.category}&name=${this.location}`;
      if (this.selectedChoice == "ที่พัก")
        route = `hotels/get-hotels-by-filter?district=${this.district}&name=${this.location}`;
      if (this.selectedChoice == "ร้านอาหาร")
        route = `restaurants/get-restaurants-by-filter?district=${this.district}&name=${this.location}`;
      let res = await api.get(route);
      this.result = res.data;
      this.isBusy = false;

      var element = this.$refs.dataResult;

      var top = element.offsetTop;

      setTimeout(function() {
        window.scrollTo(0, top);
      }, 500);
    },
  },
  async mounted() {
    let res = await api.get("attractions/get-attraction-types");
    res.data.forEach((i) => {
      this.types.push(i.name);
    });
  },
};
</script>
