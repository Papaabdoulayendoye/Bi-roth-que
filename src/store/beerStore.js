import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBeerStore = defineStore('beer', () => {
const beers = ref([
{
    id: 1,
    name: 'Le vieux',
    comment: 'Bière blonde triple',
    priceHT: 5.50,
    alcoholDegree: 10,
    type: 'BLONDE',
    owner: 'admin'
}
])

const addBeer = (beer) => {
beer.id = Math.max(...beers.value.map(b => b.id), 0) + 1
beer.priceTTC = beer.priceHT * 1.20
beers.value.push(beer)
}

const updateBeer = (updatedBeer) => {
const index = beers.value.findIndex(b => b.id === updatedBeer.id)
if (index !== -1) {
    beers.value[index] = {
    ...updatedBeer,
    priceTTC: updatedBeer.priceHT * 1.20
    }
}
}
const deleteBeer = (id) => {
    beers.value = beers.value.filter(beer => beer.id !== id);
};

const getBeerById = (id) => {
return beers.value.find(b => b.id === Number(id))
}

return {
beers,
addBeer,
updateBeer,
deleteBeer,
getBeerById
}
})

