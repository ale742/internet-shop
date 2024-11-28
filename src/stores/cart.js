import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useProductStore } from "./product";

export const useCartStore = defineStore('cart', () => {
    const carts  = ref([
        {
            productId: 1,
            count:1,

        }
    ]);


     const findCartProductById = (id) => {
            return carts.value.find((product) => product.productId == id);
     }

const updateCountCart = (id,count = 1) => {
     const productCart = findCartProductById(id);
     if (productCart){
      productCart.count = count ;
     }
    }

     const addToCart = (id) => {
        const productCart = findCartProductById(id);
     if (productCart){
      updateCountCart(id,productCart.count + 1)
     } else{
        carts.value.push({
            productId: id,
            count: 0,
        })
     }
    

   
}


    const productStore = useProductStore();
const cartList = computed(() =>{
     return carts.value.map((cartProduct) => {
        const product = productStore.findProductById(cartProduct.productId);
        return{
            productId: cartProduct.productId,
            name:product.name,
            img: product.img,
            prise: product.price,
            count:cartProduct.count,
        }
     })
});


const totalSum = computed(()=>{
    return cartList.value.reduce((sum,product) => sum + product.count*product.prise, 0)
})



const removeById = (id) => {
    const index = carts.value.findIndex((product) => product.productId == id);
    if (index != -1) {
        carts.value.splice(index,1);
    }
}



return {

    updateCountCart,
        carts,
        addToCart,
        cartList,
        totalSum,
        removeById,
}

});