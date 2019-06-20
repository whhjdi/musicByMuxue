const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home");
const Rank = () => import(/* webpackChunkName: "rank" */ "@/views/Rank");
const Artist = () => import(/* webpackChunkName: "artist" */ "@/views/Artist");
const User = () => import(/* webpackChunkName: "user" */ "@/views/User");
const Search = () => import(/* webpackChunkName: "search" */ "@/views/Search");
const Login = () => import(/* webpackChunkName: "login" */ "@/views/Login");
const AllSongList = () =>
  import(
    /* webpackChunkName: "allSongList" */ "@/components/Recommend/AllSongList.vue"
  );
const MusicList = () =>
  import(/* webpackChunkName: "musicList" */ "@/components/base/MusicList.vue");
export default {
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        index: 2
      },
      children: [
        {
          path: ":id",
          component: MusicList
        }
      ]
    },
    {
      path: "/rank",
      name: "rank",
      component: Rank,
      meta: {
        index: 3
      },
      children: [
        {
          path: ":idx",
          component: MusicList
        }
      ]
    },
    {
      path: "/artist",
      name: "artist",
      component: Artist,
      meta: {
        index: 4
      },
      children: [
        {
          path: ":id",
          component: MusicList
        }
      ]
    },
    {
      path: "/user",
      name: "user",
      component: User,
      meta: {
        index: 1
      },
      children: [
        {
          path: ":id",
          component: MusicList
        }
      ]
    },
    {
      path: "/search",
      name: "search",
      component: Search,
      meta: {
        trans: 0
      },
      children: [
        {
          path: ":id",
          component: MusicList
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/songslist",
      name: "songslist",
      component: AllSongList,
      children: [
        {
          path: ":id",
          component: MusicList
        }
      ]
    }
  ]
};
