<template>
   <section class="projetos-container">
    <h2>Meus Projetos</h2>

    <div class="projetos-grid">
        <div v-for="projeto in projetos" :key="projeto.id" class="projeto-card">
            <img :src="projeto.imagens[0]" :alt="projeto.titulo"/>
            <h3>{{ projeto.titulo }}</h3>
            <p>{{ projeto.descricaoCurta }}</p>
            <button @click="abrirModal(projeto)" class="btn-ver-mais">Ver mais</button>
        </div>
    </div>

    <div v-if="modalAberto" class="modal" @click.self="fecharModal">
        <div class="modal-content">
            <span class="close" @click="fecharModal">&times;</span>
            <h2>{{ projetoSelecionado?.titulo }}</h2>

            <div v-if="projetoSelecionado" class="carousel">
                <button class="prev" @click="prevImagem">&#10094;</button>
                <img :src="projetoSelecionado.imagens[imagemAtualIndex]" :alt="projetoSelecionado.titulo">
                <button class="next" @click="nextImagem">&#10095;</button>
            </div>
            <p>{{ projetoSelecionado?.descricaoDetalhada }}</p>

            <div class="modal-buttons">
                <a v-if="projetoSelecionado?.codigoUrl" :href="projetoSelecionado.codigoUrl" target="_blank" class="btn">Código</a>
                <a v-if="projetoSelecionado?.siteUrl" :href="projetoSelecionado.siteUrl" target="_blank" class="btn">Site</a>
            </div>
        </div>
    </div>
   </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import projetosJson from '../../assets/projetos.json'

interface Projeto {
    id: number;
    titulo: string;
    descricaoCurta: string;
    descricaoDetalhada: string;
    imagens: string[];
    codigoUrl?: string;
    siteUrl?: string;
}

const projetos = ref<Projeto[]>([])
const projetoSelecionado = ref<Projeto | null>(null)
const modalAberto = ref<boolean>(false)
const imagemAtualIndex = ref<number>(0)

const abrirModal = (projeto: Projeto) => {
    projetoSelecionado.value = projeto
    imagemAtualIndex.value = 0
    modalAberto.value = true
}

const fecharModal = () => {
    modalAberto.value = false
}

const prevImagem = () => {
    if (!projetoSelecionado.value) return
    const total = projetoSelecionado.value.imagens.length
    imagemAtualIndex.value = (imagemAtualIndex.value - 1 + total) % total
}

const nextImagem = () => {
    if (!projetoSelecionado.value) return
    const total = projetoSelecionado.value.imagens.length
    imagemAtualIndex.value = (imagemAtualIndex.value + 1) % total
}

onMounted(() => {
    projetos.value = projetosJson as Projeto[]
})
</script>

<style scoped>
.projetos-container {
  padding: 2rem;
  color: white;
  margin-left: 200px;
}

.projetos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.projeto-card {
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  background: #1a1a1a;
}

.projeto-card img {
  width: 100%;
  height: 200px;
  border-radius: 8px;
  object-fit: cover;
}

button.btn-ver-mais {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: blue;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  transition: background 0.3s;
}

button.btn-ver-mais:hover {
  background: #0055cc;
}

h3 {
  color: blue;
  margin: 0.5rem 0;
}

p {
  font-size: 14px;
  color: #ccc;
  line-height: 1.4;
}

.modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}

.modal-content {
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 12px;
  max-width: 800px;
  width: 90%;
  position: relative;
  color: white;
  border: 1px solid #333;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 2rem;
  cursor: pointer;
  color: #999;
  transition: color 0.3s;
}

.close:hover {
  color: white;
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
  position: relative;
}

.carousel img {
  max-width: 100%;
  max-height: 400px;
  border-radius: 8px;
  object-fit: contain;
}

.carousel button {
  background: transparent;
  border: none;
  font-size: 2rem;
  color: blue;
  cursor: pointer;
  padding: 0 1rem;
  transition: color 0.3s;
}

.carousel button:hover {
  color: #0055cc;
}

.modal-buttons {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.modal-buttons .btn {
  background: blue;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  color: white;
  text-decoration: none;
  transition: background 0.3s;
  font-weight: bold;
}

.modal-buttons .btn:hover {
  background: #0055cc;
}

@media (max-width: 1024px) {
  .projetos-container {
    margin-left: 120px;
  }

  .projetos-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .projetos-container {
    margin-left: 0;
    padding: 1rem;
  }

  .projetos-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .modal-content {
    padding: 1.5rem;
    margin: 1rem;
  }

  .carousel img {
    max-height: 300px;
  }

  .modal-buttons {
    flex-direction: column;
  }

  .modal-buttons .btn {
    width: 100%;
    text-align: center;
  }
}
</style>