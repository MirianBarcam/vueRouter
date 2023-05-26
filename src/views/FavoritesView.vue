<script setup>
import PokeCard from '../components/PokeCard.vue'
import { ref } from 'vue'
import { useFavoritesStore } from '../store/favorites'
import { storeToRefs } from 'pinia'

const useFavorites = useFavoritesStore()

const cardPokeFavList = useFavorites.readFavorites()
</script>
<template>
  <div class="container-favorites">
    <h1>Pokemons favorites</h1>
    <PokeCard
      v-for="card in cardPokeFavList"
      :name-poke="card.name.toLocaleUpperCase()"
      :img-poke="card.sprites?.front_default"
    ></PokeCard>
  </div>
</template>

<style>
.container-favorites {
  margin: 2rem;
}
</style>
