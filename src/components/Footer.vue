<template>
<footer>
<p>Utilisateur : {{ username }}</p>
</footer>
</template>

<script setup>
import { ref, onMounted } from "vue";
const username = ref("");
onMounted(() => {
username.value = localStorage.getItem("username") || "Papa Abdoulaye";
});
</script>

<style scoped lang="scss">
footer {
margin-top: 40px;
padding: 10px;
background: #f2f2f2;
text-align: center;
}
</style>
