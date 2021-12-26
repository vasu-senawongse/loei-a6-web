<template>
  <div>
    <div class="text-center mb-5">
      <span class="hide-mobile system-head">
        ระบบฐานข้อมูลการท่องเที่ยวอย่างยั่งยืนในพื้นที่พิเศษเลย
      </span>
    </div>

    <b-navbar toggleable="lg" variant="faded" type="light">
      <a href="/">
        <b-navbar-brand
          tag="h1"
          class="mb-0"
          style="width: 150px; margin-right : 50px"
          ><img src="/img/logo.png" width="150px"/></b-navbar-brand
      ></a>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/" class="text-center">
            <div>
              <img src="../assets/images/home.svg" height="30px" />
            </div>
            <div>
              <span class="nav-text">หน้าหลัก</span>
            </div>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="/introduction" class="text-center">
            <div>
              <img src="../assets/images/bullseye.svg" height="30px" />
            </div>
            <div>
              <span class="nav-text">แนะนำโครงการ</span>
            </div>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="/usage" class="text-center">
            <div>
              <img src="../assets/images/document.svg" height="30px" />
            </div>
            <div>
              <span class="nav-text">แนะนำการใช้งาน</span>
            </div>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="#" class="text-center">
            <div>
              <img src="../assets/images/car.svg" height="30px" />
            </div>
            <div>
              <span class="nav-text">แนะนำการเดินทาง</span>
            </div>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="#" class="text-center">
            <div>
              <img src="../assets/images/download.svg" height="30px" />
            </div>
            <div>
              <span class="nav-text">ดาวน์โหลดเอกสาร</span>
            </div>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="/organization" class="text-center">
            <div>
              <img src="../assets/images/link.svg" height="30px" />
            </div>
            <div>
              <span class="nav-text">หน่วยงานที่เกี่ยวข้อง</span>
            </div>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="/contact" class="text-center last-nav">
            <div>
              <img src="../assets/images/phone.svg" height="30px" />
            </div>
            <div>
              <span class="nav-text">ติดต่อเรา</span>
            </div>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <a href="http://43.229.149.124:3000/" target="_blank"
            ><span><b-button variant="warning">ผู้ดูแลระบบ</b-button></span></a
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  watch: {
    $route(to, from) {
      if (to !== from) {
        location.reload();
      }
    },
  },
  methods: {},
  async mounted() {},
};
</script>
<style>
.nav-head-custom:hover {
  background: gray;
}
</style>
