<!-- <template>
    <div>
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/about">À propos</router-link>
    </nav>
    <router-view />
  </div>
  <div class="app">
    <h1>Ma Biérothèque</h1>
    <BeerForm @add-beer="addBeer" @update-beer="updateBeer" :editing-beer="editingBeer" />
    <BeerList :beers="beers" @edit-beer="startEditing" @delete-beer="deleteBeer" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BeerForm from './components/BeerForm.vue';
import BeerList from './components/BeerList.vue';

const beers = ref([
  {
    id: 1,
    name: 'Le vieux',
    comment: 'Bière blonde triple',
    priceHT: 5.50,
    priceTTC: 5.50,
    alcoholDegree: 10,
    type: 'BLONDE',
    owner: 'admin'
  }
]);

const editingBeer = ref(null);

const addBeer = (beer) => {
  beer.id = beers.value.length + 1;
  beer.priceTTC = beer.priceHT * 1.20;
  beers.value.push(beer);
};

const startEditing = (beer) => {
  editingBeer.value = { ...beer };
};

const updateBeer = (updatedBeer) => {
  const index = beers.value.findIndex(b => b.id === updatedBeer.id);
  if (index !== -1) {
    updatedBeer.priceTTC = updatedBeer.priceHT * 1.20;
    beers.value[index] = updatedBeer;
  }
  editingBeer.value = null;
};

const deleteBeer = (id) => {
  beers.value = beers.value.filter(beer => beer.id !== id);
};
</script>

<style scoped>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style> -->


<!-- <template>
  <Header />
  <router-view />
  <Footer />
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style lang="scss" scoped>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style> -->



<template>
  <div class="app">
    <Header />
    <main>
      <router-view :key="$route.fullPath" />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  main {
    flex: 1;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }
}
</style>