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
    <div v-if="data" class="btn-navegation">
      <button
        class="btn-poke"
        :class="!data.previous ? 'btn-poke-disabled' : 'btn-poke'"
        @click="getData(data.previous)"
        :disabled="!data.previous"
      >
        Anterior
      </button>
      <button
        class="btn-poke"
        :class="!data.next ? 'btn-poke-disabled' : 'btn-poke'"
        @click="getData(data.next)"
        :disabled="!data.next"
      >
        Siguiente
      </button>
    </div>
  </div>
</template>

<style>
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
.btn-poke-disabled {
  opacity: 30%;
}
</style>
