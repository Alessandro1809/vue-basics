<script lang="ts" src="./MyCounterScript2"></script>

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
    background-color: rgb(0, 72, 255);
}
</style>