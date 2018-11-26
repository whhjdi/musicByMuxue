<template>
  <div class="loading">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-reload"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
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
.loading {
  .icon {
    width: 24px;
    height: 24px;
    display: block;
    padding: 5px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    color: #e8483c;
  }
}
</style>
