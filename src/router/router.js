import Vue from "vue";
import Router from "vue-router";
import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";
import Home from "../views/pages/Home/Home.vue";
import Attraction from "../views/pages/Attractions/Attraction.vue";
import NotFoundPage from "../views/pages/Error/NotFoundPage.vue";
import ContactPage from "../views/pages/Contacts/Contact.vue";
import OrganizationPage from "../views/pages/Organizations/Organization.vue";
import IntroductionPage from "../views/pages/Introductions/Introduction.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  hash: false,
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter,
      },
    },
    {
      path: "/error/not-found",
      name: "error.not.found",
      components: {
        header: AppHeader,
        default: NotFoundPage,
        footer: AppFooter,
      },
    },
    {
      path: "/attractions/:name",
      name: "attraction",
      components: {
        header: AppHeader,
        default: Attraction,
        footer: AppFooter,
      },
    },
    {
      path: "/contact",
      name: "contact",
      components: {
        header: AppHeader,
        default: ContactPage,
        footer: AppFooter,
      },
    },
    {
      path: "/organization",
      name: "organization",
      components: {
        header: AppHeader,
        default: OrganizationPage,
        footer: AppFooter,
      },
    },
    {
      path: "/introduction",
      name: "introduction",
      components: {
        header: AppHeader,
        default: IntroductionPage,
        footer: AppFooter,
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
