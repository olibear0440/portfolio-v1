import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Contact from "../views/Contact.vue";
import MonPortfolio from "../views/MonPortfolio.vue";
import DemoRestaurant from "../views/Restaurant.vue";
import Apropos from "../views/Apropos.vue";
import DemoReseauSocial from "../views/Reseau-social.vue";
import VitrineDemo from "../views/Vitrine.vue";
import CommerceDemo from "../views/Ecommerce.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/monPortfolio",
    name: "MonPortfolio",
    component: MonPortfolio,
  },
  {
    path: "/restaurantItalizza",
    name: "DemoRestaurant",
    component: DemoRestaurant,
  },
  {
    path: "/reseauSocialDev_o",
    name: "DemoReseauSocial",
    component: DemoReseauSocial,
  },
  {
    path: "/vitrine",
    name: "VitrineDemo",
    component: VitrineDemo,
  },
  {
    path: "/ecommerce",
    name: "CommerceDemo",
    component: CommerceDemo,
  },

  {
    path: "/aPropos",
    name: "Apropos",
    component: Apropos,
  },

  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
