<script setup>
    defineProps({
      categories: Array
    })

    const tiltEffect = (event) => {
      const card = event.currentTarget
      const rect = card.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      
      card.style.transform = `perspective(1000px) rotateX(${(y - rect.height/2)/20}deg) rotateY(${(x - rect.width/2)/20}deg)`
    }

    const resetTilt = (event) => {
      event.currentTarget.style.transform = 'none'
    }
    </script>

    <template>
      <div class="container mx-auto px-4 py-20">
        <h2 class="text-4xl font-retro text-terminal-green mb-12 text-center">
          Explore Our Categories
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(category, index) in categories"
            :key="index"
            @mousemove="tiltEffect"
            @mouseleave="resetTilt"
            class="p-8 border-2 border-terminal-green rounded-lg transform transition-transform duration-300"
          >
            <div class="text-6xl mb-4">{{ category.icon }}</div>
            <h3 class="text-2xl mb-2" :class="category.color">{{ category.title }}</h3>
            <p class="text-gray-400">{{ category.description }}</p>
          </div>
        </div>
      </div>
    </template>
