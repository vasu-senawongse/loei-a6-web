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
import UsagePage from "../views/pages/Usage/Usage.vue";
import DocumentPage from "../views/pages/Documents/Document.vue";
import TransportationPage from "../views/pages/Transportations/Transportation.vue";
import ProductPage from "../views/pages/Products/Product.vue";
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
    {
      path: "/usage",
      name: "usage",
      components: {
        header: AppHeader,
        default: UsagePage,
        footer: AppFooter,
      },
    },
    {
      path: "/download-document",
      name: "document",
      components: {
        header: AppHeader,
        default: DocumentPage,
        footer: AppFooter,
      },
    },
    {
      path: "/transportation",
      name: "transportation",
      components: {
        header: AppHeader,
        default: TransportationPage,
        footer: AppFooter,
      },
    },
    {
      path: "/products",
      name: "products",
      components: {
        header: AppHeader,
        default: ProductPage,
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
