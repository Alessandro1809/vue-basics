<script lang="ts">

import { defineComponent,ref,computed } from 'vue'

export default defineComponent({
    props:{
        value: {
            type: Number,
            required: true
        },
    },
    setup(props){
        const counter = ref(props.value);

     const  squareCounter = computed(()=>{
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
            squareCounter,
            incrementCounter,
            decremmentCounter
        }
    }
})

</script>

<template>
    <section>
        <h3>Counter : {{counter}}</h3>
        <h3>Square : {{squareCounter}}</h3>

        <div>
            <button @click="incrementCounter">+1</button>
            <button @click="decremmentCounter">-1</button>
        </div>
    </section>

</template>



//scoped style
<style scoped>

button{
    padding: 10px 20px;
    margin: 10px;
    font-size: 20px;
    background-color: #848589;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    transition-duration: 300ms;
}
button:hover{
    background-color: #f00;
}
</style>