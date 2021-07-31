<template>
  <div></div>
</template>
<script>
import api from "@/services/api.js";
export default {
  name: "attraction",
  data() {
    return {
      result: {},
      apiRoute: `attractions/get-attraction-by-name/${this.$route.params.name}`,
    };
  },
  methods: {
    async search() {
      let res = await api.get(this.apiRoute);
      this.result = res.data;
      console.log(this.result);
    },
  },
};
</script>
