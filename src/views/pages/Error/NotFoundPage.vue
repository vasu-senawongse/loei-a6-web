<template>
  <div>
    <b-jumbotron
      lead="ไม่พบหน้าที่คุณค้นหา โปรดตรวจสอบลิงก์ของคุณหรือติดต่อผู้ดูแลระบบ"
      bg-variant="white"
      class="text-center"
    >
      <template v-slot:header>
        ไม่พบหน้าที่คุณค้นหา
      </template>
      <b-button variant="outline-dark" @click="refresh">
        <b-icon icon="box-arrow-in-left"></b-icon>
        กลับหน้าหลัก
      </b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",
  methods: {
    refresh() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>
