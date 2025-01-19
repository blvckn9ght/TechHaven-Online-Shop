<template>
      <div class="flip-card w-64 h-96">
        <div class="flip-card-inner w-full h-full">
          <div class="flip-card-front absolute w-full h-full bg-gray-800 p-4">
            <img :src="product.image" alt="Product" class="w-full h-48 object-cover mb-4">
            <h3 class="text-xl">{{ product.name }}</h3>
            <p class="text-sm">{{ product.shortDescription }}</p>
          </div>
          <div class="flip-card-back absolute w-full h-full bg-gray-700 p-4">
            <h3 class="text-xl mb-2">{{ product.name }}</h3>
            <ul class="text-sm mb-4">
              <li v-for="(spec, index) in product.specs" :key="index">{{ spec }}</li>
            </ul>
            <button 
              class="px-4 py-2 border-2 border-terminal-green hover:bg-terminal-green hover:text-black transition-colors"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </template>

    <script>
    export default {
      props: {
        product: {
          type: Object,
          required: true
        }
      }
    }
    </script>
