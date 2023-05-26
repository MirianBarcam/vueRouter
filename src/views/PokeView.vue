<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { useGetData } from '@/composables/getData'
import { useFavoritesStore } from '../store/favorites'
const useFavorites = useFavoritesStore()

const route = useRoute()
const router = useRouter()
const addPokeRepeat = ref(false)
const addedPoke = ref(false)

const namePoke = route.params.name.toLocaleUpperCase()

const { data, getData, loading } = useGetData()

// const pokemon = ref({})
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)

const back = () => {
  router.push('/pokemons')
}
</script>
<template>
  <div v-if="loading">Cargando...</div>
  <div v-else class="data-pokemon">
    <div class="container-btn-return">
      <button class="btn-poke" @click="back">Volver</button>
    </div>
    <div v-if="data" class="pokemon-container">
      <img :src="data.sprites?.front_default" />
      <h1>{{ namePoke }}</h1>
    </div>
    <button class="btn-favorite-add btn-poke" @click="useFavorites.addPokeToFavorites(data)">
      Agregar a favoritos
    </button>
    <p v-if="addPokeRepeat" class="msg-favorite-repeat">
      {{ namePoke }} ya se ha añadido a favoritos anteriormente
    </p>
    <p v-if="addedPoke" class="msg-added-favorite">{{ namePoke }} ha sido añadido a favoritos</p>
  </div>
</template>
<style>
/* * {
  border: 1px solid red;
} */
.msg-added-favorite {
  color: green;
}
.msg-favorite-repeat {
  color: red;
}
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
  max-width: 10rem;
}
</style>
