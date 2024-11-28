import { defineStore } from 'pinia'
import { computed, ref } from 'vue';


export const useProductStore = defineStore('product', () => {
const products = ref([
    {
id: 1,
name: 'ASUS ROG MAXIMUS Z690 EXTREME GLACIAL',
img: 'https://ants.kz/upload/resize_cache/webp/iblock/e98/450_450_1/tzwnq7fu8gl2cc942ftxjfumug86tluq.webp',
price: 300,
category: 'motherboard',
discription: 'information',
publish_at: '27.11.2024'
    },
    {
        id: 2,
        name: 'AMD Ryzen 7 5700X OEM',
        img: 'https://ants.kz/upload/resize_cache/webp/iblock/542/450_450_1/v35oy7vgvk880q13ywpi8a7na0bes4r8.webp',
        price: 200,
        category: 'CPU',
        discription: 'information',
        publish_at: '28.11.2024'
            },
            {
            id: 3,
            name: 'Kingston Fury Beast Black EXPO',
            img: 'https://ants.kz/upload/resize_cache/webp/iblock/a12/450_450_1/llw9pbl326cbubi7h2fwa3z9sh6l067s.webp',
            price: 200,
            category: 'RAM',
            discription: 'information',
             publish_at: '25.11.2024'
            },
            {
            id: 4,
            name: '24 Gb PNY RTX 3090',
            img: 'https://ants.kz/upload/resize_cache/webp/iblock/657/450_450_1/pq2tj2p7tzqtd5mkdbmqfxe16knia8sj.webp',
             price: 2000,
             category: 'GPU',
             discription: 'information',
             publish_at: '26.11.2024'
             },                    
]);


const productsFilteredByCategoryName = computed(() =>{
return (category, searchText) => {
    if(category){
        return products.value.filter((product) => product.category === category);
    }
    if(searchText){
        return products.value.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()));
    }
    return products.value;
}
});


const findProductById = computed(() => {
return (id) => {
    return products.value.find((product) => product.id == id)
}
});


return {
    products,
    productsFilteredByCategoryName,
    findProductById,
}
});