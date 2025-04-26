<template>
    <div class="beer-list">
    <h2>Liste des bières ({{ beerCount }})</h2>

    <div v-if="beerCount > 0" class="table-container">
        <table>
<thead>
    <tr>
    <th @click="sortBy('id')">ID <span v-if="sortColumn === 'id'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
    <th @click="sortBy('name')">Nom <span v-if="sortColumn === 'name'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
    <th>Commentaire</th>
    <th @click="sortBy('priceHT')">Prix HT <span v-if="sortColumn === 'priceHT'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
    <th>Prix TTC</th>
    <th @click="sortBy('alcoholDegree')">Degré <span v-if="sortColumn === 'alcoholDegree'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
    <th>Type</th>
    <th>Propriétaire</th>
    <th>Actions</th>
    </tr>
</thead>
<tbody>
    <tr v-for="beer in sortedBeers" :key="beer.id">
    <td>{{ beer.id }}</td>
    <td>{{ formatName(beer.name) }}</td>
    <td>{{ beer.comment }}</td>
    <td>{{ beer.priceHT.toFixed(2) }} €</td>
    <td>{{ beer.priceTTC ? beer.priceTTC.toFixed(2) : (beer.priceHT * 1.20).toFixed(2) }} €</td>
    <td>{{ beer.alcoholDegree }} %</td>
    <td>{{ beer.type }}</td>
    <td>{{ beer.owner }}</td>
    <td class="actions">
        <button @click="$emit('edit-beer', beer)">✏️</button>
        <button @click="$emit('delete-beer', beer.id)">🗑️</button>
    </td>
    </tr>
</tbody>
</table>
    </div>
    
    <div v-else class="empty-message">
        Aucune bière disponible.
    </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    beers: {
    type: Array,
    default: () => [],
    }
});
const emit = defineEmits(['edit-beer', 'delete-beer']);
const beerCount = computed(() => props.beers?.length || 0);

const sortColumn = ref('id');
const sortDirection = ref('asc');

const sortedBeers = computed(() => {
    return [...props.beers].sort((a, b) => {
        const modifier = sortDirection.value === 'asc' ? 1 : -1;
        if (a[sortColumn.value] < b[sortColumn.value]) return -1 * modifier;
        if (a[sortColumn.value] > b[sortColumn.value]) return 1 * modifier;
        return 0;
    });
});

const sortBy = (column) => {
if (sortColumn.value === column) {
sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
} else {
sortColumn.value = column;
sortDirection.value = 'asc';
}
};

const formatName = (name) => {
return name.split(' ')
.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
.join(' ');
};
</script>

<style scoped lang="scss">
.beer-list {
margin-top: 30px;
}

.table-container {
overflow-x: auto;
}

table {
width: 100%;
border-collapse: collapse;
margin-top: 15px;
}

th, td {
padding: 12px 15px;
text-align: left;
border-bottom: 1px solid #ddd;
}

th {
background-color: #3498db;
color: white;
cursor: pointer;
user-select: none;
}

th:hover {
background-color: #2980b9;
}

tr:hover {
background-color: #f5f5f5;
}

.actions {
display: flex;
gap: 5px;
}

button {
background: none;
border: none;
cursor: pointer;
font-size: 1.2em;
padding: 5px;
}

button:hover {
color: #3498db;
}
.empty-message {
  padding: 20px;
  text-align: center;
  color: #666;
  font-style: italic;
}
</style>

