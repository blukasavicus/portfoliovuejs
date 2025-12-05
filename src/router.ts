import { createRouter, createWebHistory } from "vue-router";
import Projetos from "./components/pages/projetos.vue";
import Sobre from "./components/pages/sobre.vue";

const routes = [
    {path: '/', component:Sobre},
    {path: '/projetos', component:Projetos}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})