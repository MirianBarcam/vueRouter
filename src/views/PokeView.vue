<script setup>
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
    <div class="container-btn-return">
      <button class="btn-poke" @click="back">Volver</button>
    </div>
    <div v-if="data" class="pokemon-container">
      <img :src="data.sprites?.front_default" />
      <h1>{{ $route.params.name.toLocaleUpperCase() }}</h1>
    </div>
  </div>
</template>
<style>
/* * {
  border: 1px solid red;
} */
.container-btn-return {
  padding: 1rem;
  border-radius: 10px;
}
.pokemon-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.btn-navegation {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
}
.data-pokemon {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}
.btn-poke {
  border-radius: 10px;
  background-color: darkcyan;
  color: aliceblue;
  border: 0px;
  padding: 0.5rem;
}
</style>
