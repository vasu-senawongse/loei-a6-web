<template>
  <div>
    <b-navbar toggleable="lg" variant="faded" type="dark"
      ><h2 class="text-center w-100 hide-mobile nav-text" style="color : white">
        ระบบฐานข้อมูลการท่องเที่ยวอย่างยั่งยืนในพื้นที่พิเศษเลย
      </h2></b-navbar
    >
    <b-navbar toggleable="lg" variant="faded" type="dark">
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
          <b-nav-item href="/"
            ><span class="nav-text">หน้าหลัก</span></b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="/introduction"
            ><span class="nav-text">แนะนำโครงการ</span></b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="/usage"
            ><span class="nav-text">แนะนำการใช้งาน</span></b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="#"
            ><span class="nav-text">แนะนำการเดินทาง</span></b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="#"
            ><span class="nav-text">ดาวน์โหลดเอกสาร</span></b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="/organization"
            ><span class="nav-text">หน่วยงานที่เกี่ยวข้อง</span></b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="/contact"
            ><span class="nav-text">ติดต่อเรา</span></b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="http://43.229.149.124:3000/" target="_blank"
            ><span class="nav-text"
              ><b-button variant="warning">ผู้ดูแลระบบ</b-button></span
            ></b-nav-item
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
