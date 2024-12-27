<script lang="ts" setup>//setup script
import MyCounter from './components/MyCounter.vue'
import MyCounterScript from './components/MyCounterScript.vue'
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue'
</script>


<template>
    <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    <hr>
    <MyCounter :value="5"/>
    <hr>
    <MyCounterScript :value="12"/>
    <hr>
    <MyCounterScript2 :value="20"/>
</template>



//scoped style
<style scoped>
h1{
    color: salmon;
}

</style>