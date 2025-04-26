<template>
    <BeerList 
        :beers="beers" 
        @edit-beer="handleEditBeer" 
        @delete-beer="deleteBeer" 
    />
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useBeerStore } from '../store/beerStore';
import BeerList from '../components/BeerList.vue';

const router = useRouter();
const beerStore = useBeerStore();
const beers = computed(() => beerStore.beers);

const handleEditBeer = (beer) => {
    router.push({ name: 'edit-beer', params: { id: beer.id } });
};

const deleteBeer = (id) => {
    beerStore.deleteBeer(id);
};
</script>