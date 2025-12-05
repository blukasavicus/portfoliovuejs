<template>
    <div>
        <button class="menu-toggle" @click="toggleMenu">
            <i :class="itsOpen ? 'bi bi-x-lg': 'bi bi-list'"></i>
        </button>

        <!-- Corrigido: espaço entre aside e : -->
        <aside :class="['sidebar', {open: itsOpen || itsDesktop}]">
            <nav>
                <ul class="direcao">
                    <li><router-link to="/" @click="closeMenu">Sobre</router-link></li>
                    <li><router-link to="/projetos" @click="closeMenu">Projetos</router-link></li>
                </ul>
                <ul class="social">
                    <li><a href="#" target="_blank"><i class="bi bi-github"></i></a></li>
                    <li><a href="mailto:bialukasavicus@gmail.com" target="_blank"><i class="bi bi-envelope-at-fill"></i></a></li>
                </ul>
            </nav>
        </aside>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const itsOpen = ref(false)
const itsDesktop = ref(false) // Inicializa como false

const toggleMenu = () => {
    itsOpen.value = !itsOpen.value
}

const closeMenu = () => {
    if(!itsDesktop.value) itsOpen.value = false
}

const handleResize = () => {
    itsDesktop.value = window.innerWidth > 768
    if(itsDesktop.value) itsOpen.value = false
}

onMounted(() => {
    itsDesktop.value = window.innerWidth > 768 // Define aqui
    window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100px;
    color: rgb(255, 255, 255);
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1000;
    transform: translateX(-100%); /* Escondido por padrão */
    transition: transform 0.3s ease;
}

.sidebar.open {
    transform: translateX(0); /* Mostrado quando aberto */
}

.sidebar nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar li {
    margin-bottom: 1.5rem;
}

.sidebar a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.sidebar .social a {
    font-size: 1.2rem;
    transition: 0.3s ease, color 0.3s ease;
}
.sidebar .social a:hover{
    transform: scale(1.5);
    color: #0F2199;
}
.sidebar .direcao a:hover{
    color: #0F2199
}
.menu-toggle{
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 2001;
    display: none;
}
@media (max-width:768px) {
    .menu-toggle{
        display: block;
    }
    .sidebar{
        width: 150px;
        transform: translateX(-100%);
    }
    .sidebar.open{
        transform: translateX(0);
    }
}
</style>