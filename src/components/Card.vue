<template>
<div class="container-card">
    <div class="imagen-card">
        <img :src="image"/>
    </div>
    <div class="description-card">
    
    </div>
</div>
</template>
<script setup>
const props = defineProps({image:String})
console.log('props:',props.image)

</script>
