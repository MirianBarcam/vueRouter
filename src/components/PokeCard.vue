<script setup>
const props = defineProps(['imgPoke', '', 'namePoke'])
const emit = defineEmits(['pokeClicked'])

const pokeSelected = () => {
  emit('pokeClicked', { poke })
}
</script>

<template>
  <div class="card-container" @click="pokeSelected">
    <div class="card-container-wrapper-img">
      <img :src="imgPoke" class="card-img" />
    </div>

    <h5>{{ namePoke }}</h5>
  </div>
</template>
<style>
/* * {
  border: 1px solid red;
} */
.card-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid grey;
  width: 30rem;
  height: 5rem;
  border-radius: 20px;
  padding: 1rem;
  gap: 2rem;
  overflow: hidden;
  background-color: rgba(191, 199, 195, 0.355);
  margin-top: 1rem;
}
.card-container:hover {
  transition: 0.2s;
  transform: scale(1.1);
  background-color: rgb(180, 180, 211);
}
@supports (object-fit: cover) {
  .card-container-wrapper-img {
    width: 3.5rem;
    object-fit: cover;
    object-position: center center;
  }
}
.card-img {
  width: 100%;
  height: auto;
  border-radius: 100%;
}
</style>
