<template>
    <!-- Example Message -->
    <div v-if="itsMine" class="flex justify-end">
        <div class="bg-green-200 text-black p-2 rounded-lg max-w-xs">
          <span class="capitalize">{{ message }}</span>

          <!-- Image -->
          <img v-if="image" :src="image" alt="YesNoImage" class="w-52 h-52 object-cover rounded-lg mt-2" />
        </div>
      </div>

      <!-- Example Received Message -->
      <div v-else class="flex">
        <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
          <span class="capitalize">{{ message }}</span>

          <!-- Image -->
          <img v-if="image" :src="image" alt="YesNoImage" class="w-52 h-52 object-cover rounded-lg mt-2" />
        </div>
      </div>
</template>


<script setup lang="ts">



interface Props{
    message:string;
    itsMine:boolean;
    image?:string;
}

defineProps<Props>();
</script>