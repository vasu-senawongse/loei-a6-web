<template>
  <div class="mb-5">
    <div class="hide-mobile"><desktop-search></desktop-search></div>
    <div class="hide-desktop"><mobile-search></mobile-search></div>
  </div>
</template>
<script>
import MobileSearch from './panel/MobileSearch.vue';
import DesktopSearch from './panel/DesktopSearch.vue';
export default {
  name: 'home',
  components: {
    DesktopSearch,
    MobileSearch,
  },
  data() {
    return {};
  },
};
</script>
