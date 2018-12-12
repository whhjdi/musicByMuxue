<template>
  <div class="suggest"></div>
</template>

<script>
import Search from "@/api/search.js";
export default {
  name: "",
  components: {},
  props: {
    query: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      page: 1
    };
  },
  watch: {
    query(newVal) {
      this.search(newVal);
    }
  },
  computed: {},
  methods: {
    search(query) {
      Search.getSuggest(query).then(res => {
        console.log(res);
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped></style>
