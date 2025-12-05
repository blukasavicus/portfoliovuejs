<template>
    <div class="about-container">
        <div class="about-text">
            <h1>Meu nome é Ana Beatriz Lukasavicus,</h1>
            <p>estudante de Informática para Internet na Etec Antônio Furlan. Atualmente, >>tento<< trabalhar com HTML, CSS e JavaScript.</p> 
            <div class="icons-grid">  
            <i class="devicon-html5-plain"></i>
            <i class="devicon-css3-plain"></i>
            <i class="devicon-javascript-plain"></i>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.about-container{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin: 8rem 2rem 2rem 2rem;
    margin-left: 200px;
}

.about-text{
    flex: 1;
    padding: 2rem;
}

.icons-grid{
    margin-top: 32px;
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2;
    justify-content: center;
}

.icons-grid i{
    font-size: 48px;
    transition: transform 0.3 ease;
}

.icons-grid i:hover{
    transform: scale(1.2);
}

@media (max-width: 768px) {
    .about-container{
        flex-direction: column;
        margin-left: 0;
        text-align: center;
    }
    .about-text{
        padding: 1rem;
    }
    .icons-grid{
        padding: 1rem;
        gap: 1.5rem;
    }
    .icons-grid i{
        font-size: 36px;
    }
}
</style>