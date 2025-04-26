<template>
<header>
<nav>
    <router-link to="/beers">Liste des bières</router-link> |
    <router-link to="/add">Ajouter une bière</router-link>
</nav>
</header>
</template>

<style scoped lang="scss">
header {
    background: #f8f9fa;
    padding: 20px;
    border-bottom: 1px solid #dee2e6;
}
nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
    }
    }
}
</style>
