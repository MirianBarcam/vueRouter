<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
import { useGetData } from '@/composables/getData'

const { data, getData, loading } = useGetData()

// const pokemon = ref({})

const back = () => {
  router.push('/pokemons')
}

// const getData = async () => {
//   try {
//     const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
//     pokemon.value = data
//   } catch (error) {
//     console.log(error)
//   }
// }

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
</script>

<template>
  <div v-if="loading">Cargando...</div>
  <div v-else class="data-pokemon">
    <h1 class="name-pokemon">{{ $route.params.name }}</h1>
    <img :src="data.sprites?.front_default" />
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
