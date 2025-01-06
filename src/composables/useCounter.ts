import { computed, ref } from "vue";

export const useCounter=(initialValue:number=5)=>{

    const counter = ref(initialValue);

    const squareCounter = computed(()=>{
        return counter.value * counter.value;
    });
    const incrementCounter=()=>{
        counter.value++;
    }
    const decremmentCounter=()=>{
        counter.value--;
    }

    return{
        counter,
        incrementCounter,
        decremmentCounter,
        //read only
        squareCounter,
    }
}