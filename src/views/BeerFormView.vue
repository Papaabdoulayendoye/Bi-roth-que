<template>
  <BeerForm 
    @add-beer="handleAddBeer"
    @update-beer="handleUpdateBeer"
    :editing-beer="editingBeer"
  />
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'; 
import { useBeerStore } from '../store/beerStore';
import BeerForm from '../components/BeerForm.vue';

const route = useRoute(); 
const router = useRouter(); 
const beerStore = useBeerStore();

const editingBeer = computed(() => {
    if (route.name === 'edit-beer') {
        return beerStore.getBeerById(route.params.id);
    }
    return null;
});

const handleAddBeer = (beer) => {
    beerStore.addBeer(beer);
    router.push({ name: 'beer-list' });
};

const handleUpdateBeer = (beer) => {
    beerStore.updateBeer(beer);
    router.push({ name: 'beer-list' });
};
</script>