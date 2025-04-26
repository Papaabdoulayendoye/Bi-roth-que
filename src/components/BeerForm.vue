<template>
<div class="beer-form">
    <h2>{{ editingBeer ? "Modifier une bière" : "Ajouter une bière" }}</h2>
    <form @submit.prevent="handleSubmit">
    <div class="form-group">
        <label>Nom*</label>
        <input v-model="formData.name" type="text" required />
        <span class="error" v-if="errors.name">{{ errors.name }}</span>
    </div>

    <div class="form-group">
        <label>Commentaire</label>
        <textarea v-model="formData.comment"></textarea>
    </div>

    <div class="form-group">
        <label>Prix HT* (€)</label>
        <input
        v-model.number="formData.priceHT"
        type="number"
        min="0"
        step="0.01"
        required
        />
        <span class="error" v-if="errors.priceHT">{{ errors.priceHT }}</span>
        <div class="ttc">Prix TTC: {{ priceTTC.toFixed(2) }} €</div>
    </div>

    <div class="form-group">
        <label>Degré d'alcool* (%)</label>
        <input
        v-model.number="formData.alcoholDegree"
        type="number"
        min="0"
        max="70"
        required
        />
        <span class="error" v-if="errors.alcoholDegree">{{
        errors.alcoholDegree
        }}</span>
    </div>

    <div class="form-group">
        <label>Type*</label>
        <select v-model="formData.type" required>
        <option value="BLONDE">Blonde</option>
        <option value="DARK">Dark</option>
        <option value="IPA">IPA</option>
        <option value="BROWN">Brown</option>
        </select>
    </div>

    <div class="form-group">
        <label>Propriétaire*</label>
        <input v-model="formData.owner" type="text" required />
    </div>

    <div class="actions">
        <button type="submit">
        {{ editingBeer ? "Mettre à jour" : "Ajouter" }}
        </button>
        <button type="button" v-if="editingBeer" @click="cancelEdit">
        Annuler
        </button>
    </div>
    </form>
</div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps(["editingBeer"]);
const emit = defineEmits(["add-beer", "update-beer"]);

const formData = ref({
  id: null,
  name: "",
  comment: "",
  priceHT: 0,
  alcoholDegree: 0,
  type: "BLONDE",
  owner: "defaultOwner",
});

const errors = ref({});

const resetForm = () => {
  formData.value = {
    id: null,
    name: "",
    comment: "",
    priceHT: 0,
    alcoholDegree: 0,
    type: "BLONDE",
    owner: "defaultOwner",
  };
};

watch(
  () => props.editingBeer,
  (newVal) => {
    if (newVal) {
      formData.value = { ...newVal };
    } else {
      resetForm();
    }
  },
  { immediate: true }
);

const priceTTC = computed(() => formData.value.priceHT * 1.2);

const validateForm = () => {
    let valid = true;
    errors.value = {};

    if (!formData.value.name) 
{
        errors.value.name = "Le nom est obligatoire";
        valid = false;
}

if (formData.value.priceHT <= 0) {
    errors.value.priceHT = "Le prix doit être positif";
    valid = false;
}

if (
    formData.value.alcoholDegree < 0 ||
    formData.value.alcoholDegree > 70
) {
    errors.value.alcoholDegree = "Le degré doit être entre 0 et 70";
    valid = false;
}

return valid;
};

const handleSubmit = () => {
  console.log('Submit triggered');
  if (!validateForm()) {
    console.log('Validation failed');
    return;
  }

  const beerData = { ...formData.value };
  console.log('Submitting beer:', beerData);
  
  if (beerData.id) {
    console.log('Updating beer');
    emit('update-beer', beerData);
  } else {
    console.log('Adding new beer');
    emit('add-beer', beerData);
  }
};

const cancelEdit = () => {
    emit("update-beer", null);
    resetForm();
};
</script>


<style scoped lang="scss">
.beer-form {
    background: #f9f9f9;
    padding: 40px;
    border-radius: 8px;
    margin-bottom: 30px;
}
form {
    display: flex; 
    flex-direction: column;
    /* margin: 0 auto; */
    padding: 20px;
}

h2 {
    margin-top: 0;
    color: #2c3e50;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input,
textarea,
select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
}

textarea {
    min-height: 80px;
}

.error {
    color: #e74c3c;
    font-size: 0.9em;
    display: block;
    margin-top: 5px;
}

.ttc {
    margin-top: 5px;
    font-style: italic;
    color: #7f8c8d;
}

.actions {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

button {
    padding: 10px 15px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background: #2980b9;
}

button[type="button"] {
    background: #95a5a6;
}

button[type="button"]:hover {
    background: #7f8c8d;
}
</style>
