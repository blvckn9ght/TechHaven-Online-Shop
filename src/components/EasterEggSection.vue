<script>
    export default {
      data() {
        return {
          showEasterEgg: false
        }
      },
      mounted() {
        const konamiCode = [
          'ArrowUp', 'ArrowUp',
          'ArrowDown', 'ArrowDown',
          'ArrowLeft', 'ArrowRight',
          'ArrowLeft', 'ArrowRight',
          'b', 'a'
        ]
        let index = 0

        const checkCode = (e) => {
          if (e.key === konamiCode[index]) {
            index++
            if (index === konamiCode.length) {
              this.showEasterEgg = true
              index = 0
            }
          } else {
            index = 0
          }
        }

        window.addEventListener('keydown', checkCode)
      }
    }
    </script>

    <template>
      <div v-if="showEasterEgg" class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
        <div class="text-terminal-green text-center">
          <pre class="text-2xl">
            ╔════════════════════════════════════════╗
            ║                                        ║
            ║   You found the secret TechHaven!     ║
            ║                                        ║
            ║   Here's a special 10% discount:      ║
            ║   CODE: TECHHAVEN10                   ║
            ║                                        ║
            ╚════════════════════════════════════════╝
          </pre>
          <button 
            @click="showEasterEgg = false"
            class="mt-8 px-8 py-4 border-2 border-terminal-green hover:bg-terminal-green hover:text-black"
          >
            Close
          </button>
        </div>
      </div>
    </template>
