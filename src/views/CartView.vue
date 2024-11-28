<script setup>
import { useCartStore } from '@/stores/cart';


const cartStore = useCartStore();

const updateCount = (id, evaent) => {
cartStore.updateCountCart(id,evaent.target.value)
}
</script>

<template>
<div class="container">
    <div class="row">
        <div class="col">
            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col" class="md-4">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Count</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product, index in cartStore.cartList" :key="product.productId">
                <th scope="row">{{ index + 1 }}</th>
                <td> <img :src="product.img"  alt=""></td>
                <td>{{ product.name }}</td>
                <td>{{ product.Price }}</td>
                <td><input type="text" ref="countInput" @input="updateCount (product.productId, $event)"  class="form-control" value="1"></td>
                <td><button type="button" @click="cartStore.removeById(product.productId)" class="btn btn-outline-danger">Delete</button></td>
                <button type="button" @click="$router.push(`/detail/${product.id}`)" class="btn btn-outline-info m-2">Detail</button>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</div>

<div class="row">
    <div class="col text-end">
         <h3>total: ${{ cartStore.totalSum }}</h3>
        </div>
         <div class="col">
         <td><button type="button " v-show="cartStore.carts.length" class="btn btn-outline-success btn-lg me-2">Buy</button></td>
    </div>
</div>
</template>