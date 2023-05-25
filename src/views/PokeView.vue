<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const router = useRouter()
import { useGetData } from '@/composables/getData'

const { data, getData, loading } = useGetData()

// const pokemon = ref({})
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)

const back = () => {
  router.push('/pokemons')
}

const addPokeToFavorites = (poke) => {
  let contentSaved = readListPokes()
  console.log('contenido recuperado:', contentSaved)
  if (contentSaved) {
    if (checkRepeatPoke(poke)) {
      addPokeToList(poke, contentSaved)
    }
  } else {
    let favoritesListPoke = []
    addPokeToList(poke, favoritesListPoke)
  }
}

const readListPokes = () => {
  return JSON.parse(localStorage.getItem('favoritesListPoke'))
}
const checkRepeatPoke = (poke) => {
  const pokeList = readListPokes()
  const pokeRepeat = pokeList.filter((e) => {
    console.log('id buscado, id de pokemon:', e.id, poke.id)
    e.id === poke.id
  })
  console.log('el pokemon repetido:', pokeRepeat)
  return pokeRepeat
}
const addPokeToList = (poke, list) => {
  list.push(poke)
  localStorage.setItem('favoritesListPoke', JSON.stringify(list))
}

// const deletePokeToFavorites=(poke)=>{
//   localStorage.setItem('favoritesListPoke', JSON.stringify(contentSaved))
// }

// const getData = async () => {
//   try {
//     const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
//     pokemon.value = data
//   } catch (error) {
//     console.log(error)
//   }
// }
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
    <button class="btn-favorite-add btn-poke" @click="addPokeToFavorites(data)">
      Agregar a favoritos
    </button>
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
  max-width: 10rem;
}
</style>
