<script setup>
import { useCounterStore } from '../store/counter'
import { storeToRefs } from 'pinia'
const useCounter = useCounterStore()
// desestructuracion
// en caso de ser ref o computed:
const { count, double } = storeToRefs(useCounter)
//si no son ref ni computed:
const { increment } = useCounter
</script>

<template>
  <h1>counter: {{ useCounter.count }}</h1>
  <h1>double: {{ useCounter.double }}</h1>
  <button @click="useCounter.increment">increment</button>
</template>
