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
                      <h4>ค้นหาข้อมูลแหล่งท่องเที่ยว</h4>
                    </div>

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

                    <b-input-group class="my-4">
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

                    <b-input-group>
                      <b-form-input
                        alternative
                        type="text"
                        placeholder="ชื่อแหล่งท่องเที่ยว"
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
            <b-col md="4" cols="12" class="form-background">
              <b-row class="justify-content-center">
                <b-col md="9" cols="12" class="pt-3">
                  <div>
                    <div class="text-center pt-3">
                      <h5>
                        ค้นหาแหล่งท่องเที่ยวที่สนใจ
                      </h5>
                      <h5>
                        เลือกหมวดหมู่ของแหล่งท่องเที่ยวที่แนะนำด้านล่าง
                      </h5>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <b-row class="justify-content-center text-center my-4">
                <b-col md="3" cols="12">
                  <div>
                    <i
                      class="fas fa-hotel rounded-icon"
                      :style="
                        choices[0].value == false
                          ? { 'background-color': 'gray' }
                          : { 'background-color': choices[0].color }
                      "
                      @click="
                        choices[0].value == false
                          ? (choices[0].value = true)
                          : (choices[0].value = false)
                      "
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
                        choices[1].value == false
                          ? { 'background-color': 'gray' }
                          : { 'background-color': choices[1].color }
                      "
                      @click="
                        choices[1].value == false
                          ? (choices[1].value = true)
                          : (choices[1].value = false)
                      "
                    />
                  </div>
                  <div>
                    ร้านอาหาร
                  </div></b-col
                >
                <b-col md="3" cols="12">
                  <div>
                    <i
                      class="fa fa-map-marker rounded-icon"
                      :style="
                        choices[2].value == false
                          ? { 'background-color': 'gray' }
                          : { 'background-color': choices[2].color }
                      "
                      @click="
                        choices[2].value == false
                          ? (choices[2].value = true)
                          : (choices[2].value = false)
                      "
                    />
                  </div>
                  <div>
                    แหล่งท่องเที่ยว
                  </div></b-col
                >
              </b-row>
              <b-row class="justify-content-center text-center">
                <b-col md="3" cols="12">
                  <div>
                    <i
                      class="fa fa-coffee rounded-icon"
                      :style="
                        choices[3].value == false
                          ? { 'background-color': 'gray' }
                          : { 'background-color': choices[3].color }
                      "
                      @click="
                        choices[3].value == false
                          ? (choices[3].value = true)
                          : (choices[3].value = false)
                      "
                    />
                  </div>
                  <div>
                    คาเฟ่
                  </div></b-col
                >
                <b-col md="3" cols="12">
                  <div>
                    <i
                      class="fa fa-gift rounded-icon"
                      :style="
                        choices[4].value == false
                          ? { 'background-color': 'gray' }
                          : { 'background-color': choices[4].color }
                      "
                      @click="
                        choices[4].value == false
                          ? (choices[4].value = true)
                          : (choices[4].value = false)
                      "
                    />
                  </div>
                  <div>
                    ของฝาก
                  </div></b-col
                >
                <b-col md="3" cols="12">
                  <div>
                    <i
                      class="fas fa-store rounded-icon"
                      :style="
                        choices[5].value == false
                          ? { 'background-color': 'gray' }
                          : { 'background-color': choices[5].color }
                      "
                      @click="
                        choices[5].value == false
                          ? (choices[5].value = true)
                          : (choices[5].value = false)
                      "
                    />
                  </div>
                  <div>
                    จุดแวะ
                  </div></b-col
                >
              </b-row>
            </b-col>
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
                  :img-src="p.img"
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
                    โทร: 081-234-5678
                  </b-card-text>
                  <b-button variant="info" class="m-1">ดูรายละเอียด</b-button>
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
          <b-row class="justify-content-center">
            <b-col md="4" cols="12">
              <b-row class="justify-content-center">
                <b-col md="9" cols="12" class="pt-3">
                  <div>
                    <div class="text-center pt-3">
                      <h4>ค้นหาข้อมูลแหล่งท่องเที่ยว</h4>
                    </div>

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

                    <b-input-group class="my-4">
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

                    <b-input-group>
                      <b-form-input
                        alternative
                        type="text"
                        placeholder="ชื่อแหล่งท่องเที่ยว"
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
                  </div>
                </b-col> </b-row
            ></b-col>
          </b-row>
          <b-row class="justify-content-center text-center my-4">
            <b-col md="3" cols="4">
              <div>
                <i
                  class="fas fa-hotel rounded-icon"
                  :style="
                    choices[0].value == false
                      ? { 'background-color': 'gray' }
                      : { 'background-color': choices[0].color }
                  "
                  @click="
                    choices[0].value == false
                      ? (choices[0].value = true)
                      : (choices[0].value = false)
                  "
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
                    choices[1].value == false
                      ? { 'background-color': 'gray' }
                      : { 'background-color': choices[1].color }
                  "
                  @click="
                    choices[1].value == false
                      ? (choices[1].value = true)
                      : (choices[1].value = false)
                  "
                />
              </div>
              <div>
                ร้านอาหาร
              </div></b-col
            >
            <b-col md="3" cols="4">
              <div>
                <i
                  class="fa fa-map-marker rounded-icon"
                  :style="
                    choices[2].value == false
                      ? { 'background-color': 'gray' }
                      : { 'background-color': choices[2].color }
                  "
                  @click="
                    choices[2].value == false
                      ? (choices[2].value = true)
                      : (choices[2].value = false)
                  "
                />
              </div>
              <div>
                แหล่งท่องเที่ยว
              </div></b-col
            >
          </b-row>
          <b-row class="justify-content-center text-center">
            <b-col md="3" cols="4">
              <div>
                <i
                  class="fa fa-coffee rounded-icon"
                  :style="
                    choices[3].value == false
                      ? { 'background-color': 'gray' }
                      : { 'background-color': choices[3].color }
                  "
                  @click="
                    choices[3].value == false
                      ? (choices[3].value = true)
                      : (choices[3].value = false)
                  "
                />
              </div>
              <div>
                คาเฟ่
              </div></b-col
            >
            <b-col md="3" cols="4">
              <div>
                <i
                  class="fa fa-gift rounded-icon"
                  :style="
                    choices[4].value == false
                      ? { 'background-color': 'gray' }
                      : { 'background-color': choices[4].color }
                  "
                  @click="
                    choices[4].value == false
                      ? (choices[4].value = true)
                      : (choices[4].value = false)
                  "
                />
              </div>
              <div>
                ของฝาก
              </div></b-col
            >
            <b-col md="3" cols="4">
              <div>
                <i
                  class="fas fa-store rounded-icon"
                  :style="
                    choices[5].value == false
                      ? { 'background-color': 'gray' }
                      : { 'background-color': choices[5].color }
                  "
                  @click="
                    choices[5].value == false
                      ? (choices[5].value = true)
                      : (choices[5].value = false)
                  "
                />
              </div>
              <div>
                จุดแวะ
              </div></b-col
            >
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
                  :img-src="p.img"
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
                    โทร: 081-234-5678
                  </b-card-text>
                  <b-button variant="info" class="m-1">ดูรายละเอียด</b-button>
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
import api from '@/services/api.js';
export default {
  name: 'home',
  data() {
    return {
      location: null,
      district: 'ทุกอำเภอ',
      category: 'ทุกประเภท',
      isBusy: false,
      options: [
        'ทุกอำเภอ',
        'เชียงคาน',
        'เมืองเลย',
        'เอราวัณ',
        'ด่านซ้าย',
        'ท่าลี่',
        'นาแห้ว',
        'นาด้วง',
        'ปากชม',
        'ผาขาว',
        'ภูเรือ',
        'ภูกระดึง',
        'ภูหลวง',
        'วังสะพุง',
        'หนองหิน',
      ],
      types: [
        'ทุกประเภท',

        'ธรรมชาติ',
        'ประวัติศาสตร์',
        'วัฒนธรรม',
        'วิทยาศาสตร์',
      ],
      choices: [
        { color: 'pink', value: true },
        { color: 'violet', value: true },
        { color: 'orange', value: true },
        { color: '#BDA55D', value: true },
        { color: '#FFD300', value: true },
        { color: '#3DED97', value: true },
      ],
      result: [],
      isSearch: false,
    };
  },
  methods: {
    async search() {
      this.isBusy = true;
      if (this.isSearch == false) {
        this.isSearch = true;
      }
      let res = await api.get(
        `attractions/get-attractions-by-filter?district=${this.district}`
      );

      this.result = res.data;
      this.isBusy = false;
    },
  },
};
</script>
