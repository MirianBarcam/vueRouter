import { defineStore } from "pinia";
import {ref,computed} from 'vue';

export const useFavoritesStore = defineStore('favorites',()=>{
    const favoritesList = ref(0)
    const nameDataLocalStorage = 'favoritesListPoke'

    const readFavorites = () => {
            return JSON.parse(localStorage.getItem(nameDataLocalStorage))
          }

    const addFavorite = (poke, list) => {
        list.unshift(poke)
        localStorage.setItem(nameDataLocalStorage, JSON.stringify(list))
      }

    const checkRepeatPoke = (poke) => {
        const pokeList = readFavorites()
        let pokeRepeat = pokeList.find((e) => {
          return e.id === poke.id ? true : false
        })
        return pokeRepeat
      }

      const addPokeToFavorites = (poke) => {
        let contentSaved = readFavorites()
        if (contentSaved) {
          const repeat = checkRepeatPoke(poke)
          if (!repeat) {
            addFavorite(poke, contentSaved)
          } 
        } else {
          let favoritesListPoke = []
          addFavorite(poke, favoritesListPoke)
        }
      }

    return {
        favoritesList,readFavorites,addFavorite,checkRepeatPoke,addPokeToFavorites
    }
})