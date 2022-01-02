<template>
  <div class="home-body">
    <b-container class="form-background">
      <b-row>
        <b-col md="6" cols="12">
          <b-row class="justify-content-center">
            <b-col col lg="10">
              <div>
                <b-row class="justify-content-start mt-3">
                  <b-col col lg="12" sm="12" cols="12" class="order-lg-2">
                    <h4 class="text-center">ติดต่อเรา</h4>
                    <p>สำนักงานพื้นที่พิเศษ 5 เลย (อพท.5)</p>
                    <p>
                      เลขที่51/2 ถนนเสริฐศรี ตำบลกุดป่อง อำเภอเมืองเลย,
                      จังหวัดเลย 42000
                    </p>
                    <p>
                      <i class="fa fa-link mr-2" aria-hidden="true"></i>
                      <a
                        href="https://www.facebook.com/dasta5loei/"
                        target="_blank"
                        >www.facebook.com/dasta5loei</a
                      >
                    </p>
                    <p>
                      <i class="fa fa-phone mr-2" aria-hidden="true"></i>
                      <a href="tel:042-861-1168">042-861-1168</a>
                    </p>
                    <p>
                      <i class="fa fa-envelope mr-2" aria-hidden="true"></i>
                      <a href="mailto: dasta.loei@gmail.com"
                        >dasta.loei@gmail.com</a
                      >
                    </p>
                    <div class="mapouter">
                      <div class="gmap_canvas">
                        <iframe
                          class="gmap_iframe"
                          width="100%"
                          frameborder="0"
                          scrolling="no"
                          marginheight="0"
                          marginwidth="0"
                          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=สำนักงานพื้นที่พิเศษ5 (อพท.5) 2 ถ 51 Soet Si, Kut Pong, อ.เมืองเลย, Loei 42000&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        ></iframe
                        ><a
                          href="https://www.fridaynightfunkin.net/friday-night-funkin-mods-fnf-play-online/"
                          >FNF</a
                        >
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="6" cols="12">
          <b-row class="justify-content-center">
            <b-col col lg="10">
              <div>
                <b-row class="justify-content-start mt-3">
                  <b-col col lg="12" sm="12" cols="12" class="order-lg-2">
                    <h4 class="text-center">ส่งข้อความถึงเรา</h4>
                  </b-col>
                </b-row>
                <b-row class="justify-content-start mb-3">
                  <b-col col lg="6" sm="8" cols="8">
                    <b-form-select
                      v-model="type"
                      :options="options"
                    ></b-form-select>
                  </b-col>
                  <b-col col lg="6" sm="4" cols="4">
                    <b-button variant="success" @click="submit()"
                      >Send</b-button
                    >
                  </b-col>
                </b-row>
                <b-row class="justify-content-start">
                  <b-col col lg="6" sm="6" cols="12">
                    <b-input
                      alternative
                      class="mb-3"
                      placeholder="ชื่อผู้ติดต่อ"
                      v-model="name"
                    >
                    </b-input>
                  </b-col>

                  <b-col col lg="6" sm="6" cols="12">
                    <b-input
                      alternative
                      class="mb-3"
                      placeholder="เบอร์ติดต่อ"
                      v-model="phone"
                    >
                    </b-input>
                  </b-col>
                </b-row>

                <b-row class="justify-content-start">
                  <b-col col lg="12" sm="12" cols="12">
                    <b-input
                      alternative
                      class="mb-3"
                      placeholder="หัวข้อเรื่อง"
                      v-model="title"
                    >
                    </b-input>
                  </b-col>
                </b-row>
                <b-row class="justify-content-start">
                  <b-col lg="12" class="order-lg-2">
                    <div style="height : 200px">
                      <quill-editor
                        ref="myQuillEditor"
                        v-model="content"
                        :options="editorOption"
                        style="height : 100%"
                      />
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import api from "@/services/api.js";
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import moment from "moment";
export default {
  name: "contact",
  components: {
    quillEditor,
  },
  data() {
    return {
      apiRoute: "contacts/create-contact",
      phone: null,
      name: null,
      type: null,
      content: null,
      title: null,
      options: [
        { text: "เลือกประเภท", value: null },
        { text: "สอบถาม", value: "QUESTION" },
        { text: "แจ้งข้อมูล", value: "INFORM" },
        { text: "ขอความช่วยเหลือ", value: "REQUEST" },
        { text: "อื่นๆ", value: "OTHER" },
      ],
      editorOption: {
        placeholder: "รายละเอียด...",
        theme: "snow",
      },
    };
  },
  methods: {
    async submit() {
      var message = {
        name: this.name,
        type: this.type,
        title: this.title,
        message: this.content,
        status: "PENDING",
        phone: this.phone,
        createdAt: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      };
      let res = await api.post(this.apiRoute, message);
      this.result = res.data;
      if (this.result) {
        this.$swal({
          title: "Message Sent!",
          text: "Thank you",
          icon: "success",
          confirmButtonText: "Home",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.$router.push({ name: "home" });
          }
        });
      }
    },
  },
  async mounted() {},
};
</script>
