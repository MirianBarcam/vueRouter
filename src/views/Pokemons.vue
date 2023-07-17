<script setup>
import { RouterLink } from 'vue-router'
import { useGetData } from '@/composables/getData'
import { useCounterStore } from '../store/counter.js';
import { storeToRefs } from 'pinia';

const { data, getData, loading } = useGetData()
const useCounter  = useCounterStore();
const {increment} = useCounter;
const {count,double} = storeToRefs(useCounter);


getData('https://pokeapi.co/api/v2/pokemon')
</script>
<template>
  <div v-if="loading">Cargando...</div>
  <div class="pokemons" v-else>
    <h1>POKEMONS</h1>
    <button @click="increment" >Increment</button>
    <h1>Counter : {{ count }}</h1> 
    <h1>Double: {{ double }} </h1>
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
