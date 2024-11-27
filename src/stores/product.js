import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
const products = ref([
{
    id:1,
    name:"Banana",
    img:"https://avatars.mds.yandex.net/i?id=8bc7aeefc6e26a6a8b0afc90bd60626ec00dbdf7-5886141-images-thumbs&n=13",
    price:15,
    description:"A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large treelike herbaceous flowering plants in the genus Musa. In some countries, cooking bananas are called plantains, distinguishing them from dessert bananas.",
    publish_at:"10.11.2024",
    category:"Fruits",
},
{
    id:2,
    name:"Apple",
    img:"https://avatars.mds.yandex.net/i?id=297d9a0b2677cdd2319975967f2e910c_l-4373599-images-thumbs&n=13",
    price:10,
    description:"Apple is a juicy fruit of the apple tree, which is eaten fresh and baked, and serves as a raw material in cooking and for making drinks. The most widespread is the domestic apple tree; the plum apple tree is less commonly grown. The size of the red, green, yellow or orange spherical fruits is 5-13 cm in diameter.",
    publish_at:"20.11.2024",
    category:"Fruits",
},
{
    id:3,
    name:"Passion fruit",
    img:"https://goveggie.ro/wp-content/uploads/2018/01/fructul-pasiunii.jpg",
    price:20,
    description:"Passion fruits can reach 12 cm and have an oval shape. Their color is either dark purple or yellow-orange. The fruit may have a smooth skin, but the fruit usually tastes sweeter if the skin is cracked. Cultivation: the plant’s homeland is South America: Argentina, Brazil and Paraguay.",
    publish_at:"30.10.2024",
    category: "Fruits",
},
{
    id:4,
    name:"Kiwi",
    img:"https://avatars.mds.yandex.net/i?id=4f62c8474048ff54f657732e8b7d7906_l-5251286-images-thumbs&n=13",
    price:19,
    description:"Kiwi is a berry with green pulp and a fluffy-prickly light brown skin, the fruit of plants of the genus Actinidia. Nutritional value per 100 g. Calorie content is calculated for raw foods.",
    publish_at:"1.11.2024",
    category:"Fruits",
},
{
    id:5,
    name:"Tomato",
    img:"https://avatars.mds.yandex.net/i?id=36ed2c2ba0939be4b58325b8900d9986_l-5163166-images-thumbs&n=13",
    price:9,
    description:"Tomatoes, also known as tomatoes, are juicy fruits, usually red in color and round in shape. In botany, they are usually classified as berries, but popularly and when collecting trade duties, they are called vegetables.",
    publish_at:"9.11.2024",
    category:"Vegetables",
},
{
    id:6,
    name:"Watermelon",
    img:"https://avatars.mds.yandex.net/get-eda/3735503/641c48ff1e078822b7c40281491198e8/1200x1200nocrop",
    price:7,
    description:"Watermelon is an annual herbaceous plant of the Cucurbitaceae family. It was recognized as a berry, and rightly so: it has a skin (watermelon rind), juicy pulp and many seeds inside. Although it fits the description of a fruit - it is a flowering plant that bears fruit after its flowers bloom.",
    publish_at:"15.11.2024",
    category:"Berries",
},
{
    id:7,
    name:"Strawberry",
    img:"https://avatars.mds.yandex.net/i?id=fc712f8f14c9757683895acecfaa030b_l-4298511-images-thumbs&n=13",
    price:15,
    description:"Strawberry is a perennial herbaceous plant. Its round-shaped tuber fruits are usually eaten, after which the plant was named. The berries have a pronounced red color and do not exceed 5 g in weight. You can recognize the fruits by their specific smell: a mixture of honey, musk and wine.",
    publish_at:"29.10.2024",
    category:"Berries",
},
{
    id:8,
    name:"Potato",
    img:"https://avatars.mds.yandex.net/i?id=62eb759f7e7b89492a15f082b46fa9a6_l-10805306-images-thumbs&n=13",
    price:2,
    description:"Potato, or tuberous nightshade (lat. Solánum tuberósum), is a species of perennial tuberous herbaceous plants from the genus Solanum of the Solanaceae family. Potato tubers are an important food product. The fruits are poisonous due to their solanine content.",
    publish_at:"12.11.2024",
    category:"Vegetables",
},
{
    id:9,
    name:"Grape",
    img:"https://avatars.mds.yandex.net/i?id=04ac33014e379660e716f846df91cc6a4b181200c61451ce-5230282-images-thumbs&n=13",
    price:12,
    description:"Grapes are a genus of plants whose fruits are sweet berries. Currently, there are more than 8,000 grape varieties. The most famous varieties are Muscat (a grape with a strong berry aroma), Riesling (a white grape variety), Feteasca (an industrial grape variety) and Isabella (an American black grape variety).",
    publish_at:"27.11.2024",
    category:"Berries",
},

]);


const filterProductsByCategoryName = computed(() => {
    return (category, search) => {
        if (category) {
            return products.value.filter((product)  => product.category == category);
        }
        if (search) {
            return products.value.filter((product) => product.name.includes(search));
        }
        return products.value;
    }
});







return {
    products,
    filterProductsByCategoryName,
}
});