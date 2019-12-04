<!--
 * @Author: your name
 * @Date: 2019-09-25 15:30:21
 * @LastEditTime: 2019-12-04 13:07:24
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /musicByMuxue/src/components/Search/SearchBar.vue
 -->
<template>
  <div class="search-bar">
    <svg @click.stop="hideSearch" class="icon back" aria-hidden="true">
      <use xlink:href="#icon-left"></use>
    </svg>
    <input
      ref="input"
      v-model="queryArg"
      :placeholder="placeholder"
      type="text"
      class="input"
      autofocus
    />
    <svg v-if="!query" class="icon souso" aria-hidden="true">
      <use xlink:href="#icon-sousuo"></use>
    </svg>
    <svg v-else @click="deleteQuery" class="icon souso" aria-hidden="true">
      <use xlink:href="#icon-close"></use>
    </svg>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: '',
  components: {},
  props: {
    placeholder: {
      type: String,
      default: '搜歌手，搜歌曲'
    }
  },
  data() {
    return {
      queryArg: ''
    };
  },
  computed: {
    ...mapGetters(['showFooter', 'query'])
  },
  created() {
    this.$watch('queryArg', (newQuery) => {
      this.setQuery(newQuery);
    });
    this.$watch('query', (newQuery) => {
      this.queryArg = newQuery;
    });
  },
  methods: {
    ...mapMutations({
      setShowSearch: 'SET_SHOW_SEARCH',
      setQuery: 'SET_QUERY',
      setShowFooter: 'SET_SHOW_FOOTER'
    }),
    hideSearch() {
      this.setQuery('');
      this.$router.go(-1);
    },
    deleteQuery() {
      this.setQuery('');
    }
  }
};
</script>
<style lang="scss" scoped>
.search-bar {
  display: flex;
  padding: 5px;
  color: #191516;
  .back {
    height: 30px;
    width: 20px;
    position: absolute;
    left: 10px;
    top: 5px;
  }
  .input {
    width: 100%;
    height: 30px;
    background: #e7e7e7;
    border: none;
    border-radius: 6px;
    padding-left: 30px;
    padding-right: 30px;
    outline: none;
  }
  .souso {
    height: 30px;
    width: 20px;
    position: absolute;
    right: 10px;
    top: 5px;
  }
}
</style>
