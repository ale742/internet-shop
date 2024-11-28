<script setup>
import { useCategoryStore } from '@/stores/Category';
import { useProductStore } from '@/stores/product';
import { ref,} from 'vue'

const productsStore =useProductStore();
const categoryStore =useCategoryStore();
const category = ref(null);
const searchText = ref("");
const products = ref([]);
products.value = productsStore.products;
const filterCategory = () => {
  products.value = productsStore.filterProductsByCategoryName(category.value, null);
}
const searchName = () => {
  category.value = null;
  products.value = productsStore.filterProductsByCategoryName(null, searchText.value);
}
</script>

<template>
<div class="container">
  <div class="row mt-4">
    <div class="col md-5">
      <select class="form-select" aria-label="Default select example" v-model="category" @change=filterCategory >
  <option selected >Select category</option>
  <option v-for="category in categoryStore.categories"
  :value="category"
  :key="category"
  >{{ category }}
</option>

</select>
</div>
      <div class="col md-5">
        <input type="text" class="form-control" value="Search by name" aria-label="readonly input example" v-model="searchText" @input="searchName">
      </div>
        <div class="col md-2">
          <button type="button" class="btn btn-outline-warning">reset</button>
    
     
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col" v-for="product in products" :key="product.id">
    <div class="card">
      <img :src="product.img" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">${{ product.description }}</p>
        <p class="card-text">${{ product.price }}</p>
        <p class="card-text">{{ product.category }}</p>
        <p class="card-text">Date:{{ product.publish_at }}</p>
        
        <div class="card-footer text-end">
            <button type="button" @click="$router.push(`/detail/${product.id}`)" class="btn btn-outline-danger m-2">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
        </div>
      </div>
    </div>

  </div>
  
</div>
  </div>
</div>
</template>