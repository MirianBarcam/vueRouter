<script setup>
import { RouterLink } from 'vue-router'
import { useGetData } from '@/composables/getData'

const { data, getData, loading } = useGetData()
// const getData = async () => {
//   try {
//     const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon')
//     pokemons.value = data.results
//   } catch (error) {
//     console.log(error)
//   }
// }

getData('https://pokeapi.co/api/v2/pokemon')
</script>
<template>
  <div v-if="loading">Cargando...</div>
  <div class="pokemons" v-else>
    <h1>POKEMONS</h1>
    <ul>
      <li v-for="(pokemon, index) in data.results">
        <RouterLink :to="`/pokemons/${pokemon.name}`"
          >{{ index + 1 }}. {{ pokemon.name }}</RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<style></style>
