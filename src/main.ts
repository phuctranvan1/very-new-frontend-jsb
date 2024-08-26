import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import AddMusic from "./pages/AddMusic.vue";
import Profile from "./pages/Profile.vue";
import User1 from "./pages/User1.vue";
import Login from "./pages/Login.vue";
import Music from "./pages/Music.vue";
import Filter from "./pages/Filter.vue";
import DeleteMusic from "./pages/DeleteMusic.vue";
import Search from "./pages/Search.vue";
import Settings from "./pages/Settings.vue";
import Discover from "./pages/Discover.vue";
import EditMusicDetails from "./pages/EditMusicDetails.vue";
import "./global.css";

interface Route {
  path: string;
  name: string;
  component: any;
}

const routes: Route[] = [
  {
    path: "/",
    name: "AddMusic",
    component: AddMusic,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/user",
    name: "User1",
    component: User1,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/music",
    name: "Music",
    component: Music,
  },
  {
    path: "/filter",
    name: "Filter",
    component: Filter,
  },
  {
    path: "/delete-music",
    name: "DeleteMusic",
    component: DeleteMusic,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/discover",
    name: "Discover",
    component: Discover,
  },
  {
    path: "/edit-music-details",
    name: "EditMusicDetails",
    component: EditMusicDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, _, next) => {
  const metaTitle = toRoute?.meta?.title as string;
  const metaDesc = toRoute?.meta?.description as string;

  window.document.title = metaTitle || "Music-Admin-Platform---6";
  if (metaDesc) {
    addMetaTag(metaDesc);
  }
  next();
});

const addMetaTag = (value: string) => {
  const element = document.querySelector(`meta[name='description']`);
  if (element) {
    element.setAttribute("content", value);
  }
};

const vuetify = createVuetify({ components, directives });

createApp(App).use(router).use(vuetify).mount("#app");

export default router;
