<script setup>
import { useProductStore } from '@/stores/product';
import { useRoute } from 'vue-router';


const productsStore = useProductStore();
const route = useRoute();
const product = productsStore.findPcroductById(route.params.id)

</script>

<template>
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
        
    
        </div>
      </div>
    </div>
  </div>
   



</template>