<script setup>
import CartList from '@/components/CartList.vue';
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
        <CartList/>
        </div>
    </div>
</div>

<div class="row">
         <div class="col text-end g-3">
            <RouterLink class="nav-link" to="/order"> <button type="button " v-show="cartStore.carts.length" @click="ordersView"  class="btn btn-outline-success btn-lg me-2">Buy</button></RouterLink>
    </div>
</div>
</template>