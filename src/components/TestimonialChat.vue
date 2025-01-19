<script>
    export default {
      data() {
        return {
          testimonials: [
            {
              avatar: '👾',
              name: 'ByteMaster',
              message: 'TechHaven is my go-to for all things tech! The selection is incredible and the community is amazing.',
              color: 'text-terminal-green'
            },
            {
              avatar: '🤖',
              name: 'CodeNinja',
              message: 'The selection here is out of this world! I found everything I needed for my latest project.',
              color: 'text-retro-blue'
            },
            {
              avatar: '👽',
              name: 'TechAlien',
              message: 'Finally, a tech store that understands what real nerds want! The DIY kits are fantastic.',
              color: 'text-matrix-green'
            }
          ]
        }
      }
    }
    </script>

    <template>
      <div class="container mx-auto px-4 py-20">
        <h2 class="text-4xl font-retro text-terminal-green mb-12 text-center">
          What Our Users Say
        </h2>
        <div class="space-y-4 max-w-2xl mx-auto">
          <div 
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="p-4 border-2 rounded-lg"
            :class="[testimonial.color, index % 2 === 0 ? 'self-start' : 'self-end']"
          >
            <div class="flex items-center space-x-2">
              <div class="text-2xl">{{ testimonial.avatar }}</div>
              <div class="font-bold">{{ testimonial.name }}</div>
            </div>
            <p class="mt-2">{{ testimonial.message }}</p>
          </div>
        </div>
      </div>
    </template>
