<template>
  <div class="search"><search-bar></search-bar></div>
</template>

<script>
import SearchBar from "./SearchBar";
export default {
  name: "",
  components: { SearchBar },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.search {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
</style>
