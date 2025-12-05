import { createRouter, createWebHistory } from "vue-router";
import Projetos from "./components/pages/Projetos.vue";
import Sobre from "./components/pages/Sobre.vue";

const routes = [
    { path: '/', component: Sobre },
    { path: '/projetos', component: Projetos }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});