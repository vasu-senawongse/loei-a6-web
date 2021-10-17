<template>
  <div>
    <b-container>
      <b-row
        class="justify-content-center"
        style="margin-top : 50px;margin-bottom :50px"
      >
        <b-col col lg="10">
          <div>
            <b-row class="justify-content-start">
              <b-col col lg="12" sm="12" cols="12" class="order-lg-2">
                <h4>ติดต่อเรา</h4>
              </b-col>
            </b-row>
            <b-row class="justify-content-start mb-3">
              <b-col col lg="4" sm="6" cols="6">
                <b-form-select
                  v-model="type"
                  :options="options"
                ></b-form-select>
              </b-col>
              <b-col col lg="2" sm="6" cols="6">
                <b-button variant="success" @click="submit()">Send</b-button>
              </b-col>
            </b-row>
            <b-row class="justify-content-start mb-3">
              <b-col col lg="6" sm="6" cols="12">
                <b-input
                  alternative
                  class="mb-3"
                  placeholder="ชื่อผู้ติดต่อ"
                  v-model="name"
                >
                </b-input>
              </b-col>
            </b-row>

            <b-row class="justify-content-start mb-3">
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

            <b-row class="justify-content-start mb-3">
              <b-col col lg="6" sm="6" cols="12">
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
                <div style="height : 300px">
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
        { text: "--เลือกประเภท--", value: null },
        { text: "สอบถาม", value: "QUESTION" },
        { text: "ขอความช่วยเหลือ", value: "REQUEST" },
        { text: "ร้องเรียน", value: "REPORT" },
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
