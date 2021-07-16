import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import About from "../views/About.vue";
import Nview from "../views/Nview.vue";
import Student from "../services/Student";


const routes = [
  {
    path: "/",
    name: 'EventList',
    component: EventList,
  },
  {
    path: "/about",
    name: "About",
   component:About,
  },
  {
    path:'/Nview',
    name:"Nview",
    component:Nview
  },
  {
    path:'/Student',
    name:"Student",
    component:Student
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
