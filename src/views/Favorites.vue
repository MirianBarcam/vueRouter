<script setup>
import PokeCard from '../components/PokeCard.vue'
</script>
<template>
  <div>
    <h1>This is an favorites page</h1>
    <PokeCard
      :name-poke="'pikachu'"
      :img-poke="'https://www.bitgab.com/uploads/1597796080-pikachu-1597796080.png'"
    ></PokeCard>
  </div>
</template>

<style></style>
