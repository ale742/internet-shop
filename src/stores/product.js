import { defineStore } from 'pinia'
import { computed, ref } from 'vue';


export const useProductStore = defineStore('product', () => {
const products = ref([
    {
id: 1,
name: 'Banana',
img: 'https://avatars.mds.yandex.net/i?id=3c45818e01a1378bdf4b4dafcae13ebd_sr-5237670-images-thumbs&n=13',
price: 15,
category: 'Fruits',
discription: 'Banana is the name of the edible fruit of the cultivated plants of the genus Banana; usually these include Musa acuminata ',
publish_at: '27.11.2024'
    },
    {
        id: 2,
        name: 'Raspberry',
        img: 'https://avatars.mds.yandex.net/i?id=122c5ae05540ac137187133a2f6cab16_sr-5330739-images-thumbs&n=13',
        price: 10,
        category: 'berries',
        discription: 'Raspberry, or Blackberry, or Malinnik, or Rubus is a large genus of plants in the Rosaceae family, which includes many popular berry crops',
        publish_at: '28.11.2024'
            },
            {
            id: 3,
            name: 'Strawberry',
            img: 'https://avatars.mds.yandex.net/i?id=833b92d24b549392d0413b1b07cd0de7_sr-5205837-images-thumbs&n=13',
            price: 12,
            category: 'berries',
            discription: 'Strawberry is the name of large-fruited plant species of the genus Strawberry of the Rosaceae family, as well as their fruits.',
             publish_at: '25.11.2024'
            },
            {
            id: 4,
            name: 'Apple',
            img: 'https://avatars.mds.yandex.net/i?id=dd893c7e9cb1fc5b050edf93d5699f67_sr-7543894-images-thumbs&n=13',
             price: 7,
             category: 'Fruits',
             discription: 'An apple is a juicy fruit of the apple tree, which is eaten fresh and baked, and serves as a raw material in cooking and for making drinks.',
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