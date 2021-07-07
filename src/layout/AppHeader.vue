<template>
  <div>
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
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/"
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
