<template>
  <div class="mb-5">
    <div class="hide-mobile">
      <div>
        <div class="home-body">
          <b-row class="home-search justify-content-center">
            <b-col md="4" cols="12" class="form-background">
              <b-row class="justify-content-center">
                <b-col md="9" cols="12" class="pt-3">
                  <div>
                    <div class="text-center pt-3">
                      <h5>
                        เลือกหมวดหมู่ด้านล่าง
                      </h5>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <b-row class="justify-content-center text-center my-4">
                <b-col md="3" cols="12">
                  <div>
                    <i
                      class="fa fa-map-marker rounded-icon"
                      :style="
                        selectedChoice != 0
                          ? { 'background-color': 'gray' }
                          : { 'background-color': choices[0].color }
                      "
                      @click="selectedChoice = 0"
                    />
                  </div>
                  <div>
                    แหล่งท่องเที่ยว
                  </div></b-col
                >
                <b-col md="3" cols="12">
                  <div>
                    <i
                      class="fas fa-hotel rounded-icon"
                      :style="
                        selectedChoice != 1
                          ? { 'background-color': 'gray' }
                          : { 'background-color': choices[1].color }
                      "
                      @click="selectedChoice = 1"
                    />
                  </div>
                  <div>
                    ที่พัก
                  </div></b-col
                >
                <b-col md="3" cols="12">
                  <div>
                    <i
                      class="fas fa-utensils rounded-icon"
                      :style="
                        selectedChoice != 2
                          ? { 'background-color': 'gray' }
                          : { 'background-color': choices[2].color }
                      "
                      @click="selectedChoice = 2"
                    />
                  </div>
                  <div>
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
                      <h4>ค้นหาข้อมูลแหล่งท่องเที่ยว</h4>
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
                        <span class="input-group-text" style="width : 40px"
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
                        <span class="input-group-text" style="width : 40px"
                          ><i class="fa fa-map-marker"></i
                        ></span>
                      </b-input-group-prepend>
                    </b-input-group>

                    <b-input-group class="my-4" v-if="selectedChoice == 0">
                      <b-form-select
                        alternative
                        addon-left-icon="ni
            ni-lock-circle-open"
                        v-model="category"
                        style="height : 40px"
                        :options="types"
                      />

                      <b-input-group-prepend style="height : 40px;">
                        <span class="input-group-text" style="width : 40px"
                          ><i class="far fa-object-group"></i
                        ></span>
                      </b-input-group-prepend>
                    </b-input-group>

                    <div class="text-center">
                      <b-button
                        class="my-4 w-100"
                        variant="info"
                        @click="search()"
                        >ค้นหา</b-button
                      >
                    </div>
                  </div>
                </b-col>
              </b-row></b-col
            >
          </b-row>
        </div>

        <b-container class="my-5">
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
          <div v-if="isBusy == false">
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
                    โทร: {{ p.phone ? p.phone : "-" }}
                  </b-card-text>
                  <a
                    :href="'/attractions/' + p.name.replace(' ', '-')"
                    target="_blank"
                    ><b-button variant="info" class="m-1"
                      >ดูรายละเอียด</b-button
                    ></a
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
        </b-container>
      </div>
    </div>
    <div class="hide-desktop">
      <div>
        <div class="home-body p-3">
          <div class="text-center pt-3">
            <h4>ค้นหาข้อมูลแหล่งท่องเที่ยว</h4>
          </div>

          <b-row class="justify-content-center text-center my-4">
            <b-col md="3" cols="4">
              <div>
                <i
                  class="fa fa-map-marker rounded-icon"
                  :style="
                    selectedChoice != 0
                      ? { 'background-color': 'gray' }
                      : { 'background-color': choices[0].color }
                  "
                  @click="selectedChoice = 0"
                />
              </div>
              <div>
                แหล่งท่องเที่ยว
              </div></b-col
            >
            <b-col md="3" cols="4">
              <div>
                <i
                  class="fas fa-hotel rounded-icon"
                  :style="
                    selectedChoice != 1
                      ? { 'background-color': 'gray' }
                      : { 'background-color': choices[1].color }
                  "
                  @click="selectedChoice = 1"
                />
              </div>
              <div>
                ที่พัก
              </div></b-col
            >
            <b-col md="3" cols="4">
              <div>
                <i
                  class="fas fa-utensils rounded-icon"
                  :style="
                    selectedChoice != 2
                      ? { 'background-color': 'gray' }
                      : { 'background-color': choices[2].color }
                  "
                  @click="selectedChoice = 2"
                />
              </div>
              <div>
                ร้านอาหาร
              </div></b-col
            >
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
                        <span class="input-group-text" style="width : 40px"
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
                        <span class="input-group-text" style="width : 40px"
                          ><i class="fa fa-map-marker"></i
                        ></span>
                      </b-input-group-prepend>
                    </b-input-group>

                    <b-input-group class="my-4" v-if="selectedChoice == 0">
                      <b-form-select
                        alternative
                        addon-left-icon="ni
            ni-lock-circle-open"
                        v-model="category"
                        style="height : 40px"
                        :options="types"
                      />

                      <b-input-group-prepend style="height : 40px;">
                        <span class="input-group-text" style="width : 40px"
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

        <b-container class="my-5">
          <div class="text-center text-danger" v-if="isBusy == true">
            <b-spinner class="align-middle m-2"></b-spinner>
            <strong>กำลังค้นหา...</strong>
          </div>
          <div
            v-else-if="result.length == 0 && isSearch == true"
            class="text-center"
          >
            <h5>- ไม่มีข้อมูลใดที่ตรงกับตัวกรองของคุณ -</h5>
          </div>
          <div v-if="isBusy == false">
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
                    โทร: {{ p.phone ? p.phone : "-" }}
                  </b-card-text>
                  <a
                    :href="'/attractions/' + p.name.replace(' ', '-')"
                    target="_blank"
                  >
                    <b-button variant="info" class="m-1"
                      >ดูรายละเอียด</b-button
                    ></a
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
        </b-container>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/services/api.js";
export default {
  name: "home",
  data() {
    return {
      location: "",
      district: "",
      category: "",
      isBusy: false,
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
      types: [
        { text: "ทุกประเภท", value: "" },

        "ธรรมชาติ",
        "ประวัติศาสตร์",
        "วัฒนธรรม",
        "วิทยาศาสตร์",
      ],
      selectedChoice: 0,
      choices: [{ color: "orange" }, { color: "green" }, { color: "pink" }],
      result: [],
      isSearch: false,
      imgPath:
        process.env.VUE_APP_IMAGE_STORAGE_URL || "http://localhost:5000/images",
    };
  },
  methods: {
    async search() {
      this.isBusy = true;
      if (this.isSearch == false) {
        this.isSearch = true;
      }
      let res = await api.get(
        `attractions/get-attractions-by-filter?district=${this.district}&category=${this.category}&name=${this.location}`
      );

      this.result = res.data;
      this.isBusy = false;
    },
  },
};
</script>
