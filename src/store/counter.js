import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter',()=>{
    const count = ref(0);
    const increment = ()=>{
        count.value ++;
    }
    const double = computed(()=>{})
    return{
        count
    }
}

)