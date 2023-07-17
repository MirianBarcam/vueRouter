<script setup>

import { useRoute, useRouter } from 'vue-router'
import Card from '../components/Card.vue'

const route = useRoute()
const router = useRouter()
import { useGetData } from '@/composables/getData'

const { data, getData, loading } = useGetData()


const back = () => {
  router.push('/pokemons')
}


getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
</script>

<template>
  <div v-if="loading">Cargando...</div>
  <div v-else class="data-pokemon">
<Card :image="data.sprites?.front_default" ></Card>
    <h1 class="name-pokemon">{{ $route.params.name }}</h1>
  </div>
  <button @click="back">volver</button>
</template>

<style>
.data-pokemon {
  display: flex;
  flex-direction: column;
}

.name-pokemon {
  text-align: center;
}
</style>
