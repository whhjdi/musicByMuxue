<template>
  <div class="radio-list">
    <Scroll :data="djRadios" class="wrapper" ref="list">
      <div class="recommendSongs">
        <recommend-list
          :list="djRadios"
          @setDiscList="handleDisc"
        ></recommend-list>
      </div>
    </Scroll>
    <router-view
      :title="title"
      :picUrl="picUrl"
      :songs="programs"
      :id="id"
      @select="selectItem"
      ref="musicList"
    ></router-view>
  </div>
</template>

<script>
import Scroll from "../base/Scroll";
import Radio from "@/api/radio.js";
import Song from "@/api/song.js";
import RecommendList from "@/components/Recommend/RecommendList.vue";
import { mapActions } from "vuex";
import { MySong } from "@/utils";
export default {
  name: "RadioList",
  components: { Scroll, RecommendList },
  props: {},
  data() {
    return {
      djRadios: [],
      programs: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    ...mapActions(["selectPlay", "randomPlay"]),
    setRadio(res) {
      let djRadios = res.djRadios.slice(0, 9);
      this.djRadios = djRadios;
    },
    handleDisc(item) {
      console.log(item);
      this.id = item.id;
      this.title = item.name;
      this.picUrl = item.picUrl;
      Radio.getRadioProgram(item.id).then(res => {
        this.setRadioProgram(res.programs);
      });
      this.$router.push({
        path: `/user/${item.id}`
      });
    },
    setRadioProgram(programs) {
      programs.forEach(item => {
        let list = new MySong({
          id: item.id,
          name: item.name,
          picUrl: item.coverUrl,
          album: item.dj.brand,
          singer: item.dj.nickname
        });
        this.programs.push(list);
      });
    },
    selectItem(song, index) {
      this.selectPlay({ list: this.programs, index });
    },
    refresh() {
      this.$refs.list.refresh();
    }
  },
  created() {
    Radio.getRadio().then(res => {
      this.setRadio(res);
    });
    this.id = 0;
    this.title = "";
    this.picUrl = "";
  },
  mounted() {
    this.refresh();
  }
};
</script>
<style lang="scss" scoped>
.radio-list {
  position: fixed;
  width: 100%;
  bottom: 52px;
  top: 120px;
  .wrapper {
    background: #fff;
    width: 100%;
    height: 100%;
    z-index: 99;
    overflow: hidden;
    .list-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      .radio {
        padding: 10px 0;
        width: 30%;
        .pic {
          width: 80%;
          height: 80%;
        }
      }
    }
  }
}
</style>
