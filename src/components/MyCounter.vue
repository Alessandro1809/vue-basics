<script lang="ts" setup>//setup script
import {useCounter} from '../composables/useCounter';

   
   
    interface Props {
        value: number;
    }
    const props = defineProps<Props>();
    
    
    const {counter,squareCounter,incrementCounter,decremmentCounter} = useCounter();
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