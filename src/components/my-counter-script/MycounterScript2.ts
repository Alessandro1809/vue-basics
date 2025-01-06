import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        value: {
            type: Number,
            required: true
        },
    },
    setup(props){
    //     const counter = ref(props.value);
    const {counter, squareCounter,} = useCounter(props.value);
    //  const  squareCounter = computed(()=>{
    //      return counter.value * counter.value;
    //  });

     const incrementCounter=()=>{
         counter.value++;
     }
     const decremmentCounter=()=>{
         counter.value--;
     }

        return{
            counter,
            squareCounter,
            incrementCounter,
            decremmentCounter
        }
    }
})