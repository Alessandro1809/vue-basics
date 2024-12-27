<script lang="ts" setup>//setup script

import { ref,computed } from 'vue'

    // const props = defineProps<{value:number}>();
    interface Props{
        value:number;
    }
    const props = defineProps<Props>();

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
</script>

<template>
    <section>
        <h3>Counter : {{counter}}</h3>
        <h3>Square : {{squareCounter}}</h3>

        <div class="flex gap-2">
            <button
            class="btn"
            @click="incrementCounter">+1</button>
            <button 
            class="btn"
            @click="decremmentCounter">-1</button>
        </div>
    </section>

</template>



//scoped style
<style scoped>

.btn{
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}

</style>