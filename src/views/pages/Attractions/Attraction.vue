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
          <span class="mr-3"
            >การขึ้นทะเบียน/ประกาศ:
            {{ result.register ? result.register : "-" }}</span
          >
        </b-card-text>

        <b-row>
          <b-col cols="6">
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
            </b-card-text></b-col
          >
          <b-col cols="6">
            <b-card-text style="float:right">
              <b-button class="mr-3" variant="warning" v-b-modal.suggestion
                >ข้อเสนอแนะ</b-button
              >
            </b-card-text>
            <b-card-text style="float:right">
              <b-button class="mr-3" variant="info" v-b-modal.material
                >ดาวน์โหลดเอกสาร</b-button
              >
            </b-card-text>
          </b-col>
        </b-row>
      </b-card>

      <h3 v-b-toggle.attraction_info>ข้อมูลแหล่งท่องเที่ยว</h3>

      <b-collapse id="attraction_info" class="mt-2">
        <div v-if="result.physical">
          <h4>สภาพกายภาพและภูมิประเทศ</h4>
          <div v-html="result.physical"></div>
        </div>

        <div v-if="result.nature">
          <h4>คุณค่าทางธรรมชาติ</h4>
          <div v-html="result.nature"></div>
        </div>

        <div v-if="result.geo">
          <h4>ธรณีวิทยาและซากดึกดำบรรพ์</h4>
          <div v-html="result.geo"></div>
        </div>

        <div v-if="result.eco">
          <h4>นิเวศวิทยา</h4>
          <div v-html="result.eco"></div>
        </div>

        <div v-if="result.biodiversity">
          <h4>ความหลากหลายทางชีวภาพ</h4>
          <div v-html="result.biodiversity"></div>
        </div>

        <div v-if="result.history">
          <h4>โบราณคดีและประวัติศาสตร์</h4>
          <div v-html="result.history"></div>
        </div>

        <div v-if="result.myth">
          <h4>ตำนานและเรื่องเล่า</h4>
          <div v-html="result.myth"></div>
        </div>

        <div v-if="result.culture">
          <h4>มรดกทางวัฒนธรรม</h4>
          <div v-html="result.culture"></div>
        </div>

        <div v-if="result.festival">
          <h4>งานประเพณีและเทศกาล</h4>
          <div v-html="result.festival"></div>
        </div>

        <div v-if="result.creativetourism">
          <h4>การท่องเที่ยวสร้างสรรค์</h4>
          <div v-html="result.creativetourism"></div>
        </div>

        <div v-if="result.storytelling">
          <h4>Story Telling</h4>
          <div v-html="result.storytelling"></div>
        </div>

        <div v-if="result.etc">
          <h4>ข้อมูลน่าสนใจอื่นๆ</h4>
          <div v-html="result.etc"></div>
        </div>
      </b-collapse>

      <h3 v-b-toggle.5A_info>ภาพลักษณ์แหล่งท่องเที่ยว (5A)</h3>
      <b-collapse id="5A_info" class="mt-2">
        <b-row>
          <b-col md="12" cols="12" class="mb-3">
            <b-card
              bg-variant="light"
              header="สิ่งดึงดูดใจ (Attraction)"
              header-tag="header"
            >
              <b-card-text v-html="result.attraction"> </b-card-text>
            </b-card>
          </b-col>
          <b-col md="6" cols="12" class="mb-3">
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
          <b-col md="6" cols="12" class="mb-3">
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
      </b-collapse>
    </b-container>

    <div>
      <b-modal id="material" title="เอกสารที่เกี่ยวข่อง" size="lg" hide-footer>
        <b-table
          hover
          :items="material"
          :fields="fields"
          responsive
          small
          id="material-list"
          :per-page="perPage"
          :current-page="currentPage"
          style="width: 100%"
        >
          <template v-slot:cell(btn)="data">
            <span>
              <a :href="imgPath + data.item.path" target="_blank">
                <b-button variant="outline-info" class="m-1"
                  ><i class="fa fa-download mr-1" />ดาวน์โหลด</b-button
                ></a
              ></span
            ></template
          >
        </b-table>

        <b-pagination
          v-model="currentPage"
          :total-rows="material.length"
          :per-page="perPage"
          aria-controls="material-list"
          style="float:right"
        ></b-pagination>
      </b-modal>
    </div>

    <div>
      <b-modal id="suggestion" title="ข้อเสนอแนะ" size="lg" hide-footer>
        <div style="height : 100%">
          <quill-editor
            ref="myQuillEditor"
            v-model="content"
            :options="editorOption"
            style="height : 100%"
          />
        </div>
      </b-modal>
    </div>
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
      result: {},
      apiRoute: `attractions/get-attraction-by-name/${this.$route.params.name}`,
      imgRoute: `attractions/get-attraction-gallery-by-id/`,
      matRoute: `attractions/get-attraction-material-by-id/`,
      typeRoute: "attractions/get-attraction-types",
      imgPath:
        process.env.VUE_APP_IMAGE_STORAGE_URL || "http://localhost:5000/images",
      images: [],
      material: [],
      travelMonth: [],
      types: [],
      content: null,
      editorOption: {
        placeholder: "Detail...",
        theme: "snow",
      },

      fields: [
        {
          key: "file",
          label: "ไฟล์",
          class: "text-left align-middle w-180 stay-behind",
          stickyColumn: true,
        },
        {
          key: "btn",
          label: "",
          class: "text-left align-middle w-180",
        },
      ],
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
      var result = this.types.filter((i) => i.name == c)[0];
      if (result) return { "background-color": result.color };
      else {
        return { "background-color": "#808080" };
      }
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
      let res3 = await api.get(this.typeRoute);
      this.types = res3.data;
      let res4 = await api.get(this.matRoute + this.result.id);
      this.material = res4.data;
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
