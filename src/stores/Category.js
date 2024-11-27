import { defineStore } from "pinia";
import { ref} from 'vue'

export const useCategoryStore = defineStore("category", () => {
    const categories = ref([
"Fruits",
"Vegetables",
"Berries",
    ]);
    return {
        categories
    }
});