<script>
    export default {
      props: {
        products: {
          type: Array,
          required: true
        }
      },
      data() {
        return {
          currentIndex: 0
        }
      },
      methods: {
        nextProduct() {
          this.currentIndex = (this.currentIndex + 1) % this.products.length
        },
        prevProduct() {
          this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length
        }
      }
    }
    </script>

    <template>
      <div class="container mx-auto px-4 py-20">
        <h2 class="text-4xl font-retro text-terminal-green mb-12 text-center">
          Trending Products
        </h2>
        <div class="relative">
          <div 
            v-for="(product, index) in products"
            :key="index"
            v-show="index === currentIndex"
            class="p-8 border-2 border-terminal-green rounded-lg transform transition-transform duration-300 hover:scale-105"
          >
            <img :src="product.image" :alt="product.name" class="w-full h-64 object-contain mb-4">
            <h3 class="text-2xl text-terminal-green">{{ product.name }}</h3>
            <p class="text-gray-400">{{ product.description }}</p>
            <p class="text-xl text-retro-blue mt-2">{{ product.price }}</p>
          </div>
          <button 
            @click="prevProduct"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black p-4 rounded-full border-2 border-terminal-green"
          >
            &lt;
          </button>
          <button 
            @click="nextProduct"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black p-4 rounded-full border-2 border-terminal-green"
          >
            &gt;
          </button>
        </div>
      </div>
    </template>
