<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
const resetCount = () => {
  count.value = 0
}
const increaseCount = () => {
  count.value++
}
</script>

<template>
  <div class="card">
    <h2 >count is {{ count }}</h2>
    <button type="button" @click="increaseCount">Increase count </button>
    <button type="button" @click="resetCount">reset count </button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
