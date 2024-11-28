<script setup>
import { useProductStore } from '@/stores/product';
import { useRoute } from 'vue-router';

const productStore = useProductStore();
const route = useRoute();
const product = productStore.findProductById(route.params.id);


</script>


<template>
<div class="container">
    <div class="row row-cols-1 row-cols-md-3 text-center">
  <div class="col">
    <div class="card">
      <img  :src="product.img" class="card-img-top"  >
      <div class="card-body" style="height: 250px;">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{product.discription}}</p>
       <p class="card-text">{{ product.category }}</p>
        <p class="card-text">{{ product.price }}$</p>
        <p class="card-text">{{ product.publish_at }}</p>
      </div>
      </div>
    </div>
  </div>
</div>
</template>