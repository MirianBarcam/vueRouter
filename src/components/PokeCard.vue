<script setup>
const props = defineProps(['imgPoke', '', 'namePoke'])
//const emit = defineEmits(['prevPage', 'nextPage'])

/*const activarsiguiente = () => {
  emit('nextPage')
}*/
</script>

<template>
  <div class="card-container">
    <div class="card-container-wrapper-img">
      <img :src="imgPoke" class="card-img" />
    </div>

    <h3>{{ namePoke }}</h3>
  </div>
</template>
<style>
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
}
.card-container:hover {
  transition: 0.2s;
  width: 30.2rem;
  height: 5.2rem;
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
