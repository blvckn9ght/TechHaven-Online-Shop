<script setup>
    const glitchEffect = (event) => {
      event.target.classList.add('glitch')
      setTimeout(() => {
        event.target.classList.remove('glitch')
      }, 500)
    }
    </script>

    <template>
      <div class="relative h-screen flex items-center justify-center bg-black">
        <div class="absolute inset-0 bg-starfield animate-starfield"></div>
        <div class="relative z-10 text-center space-y-8">
          <h1 class="text-6xl font-retro text-terminal-green">
            Welcome to TechHaven
          </h1>
          <p class="text-xl text-retro-blue">
            Your Nerdy Tech Sanctuary
          </p>
          <div class="space-x-4">
            <button 
              @mouseenter="glitchEffect"
              class="px-8 py-4 border-2 border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black transition-all duration-300"
            >
              Enter the Haven
            </button>
            <button 
              @mouseenter="glitchEffect"
              class="px-8 py-4 border-2 border-retro-blue text-retro-blue hover:bg-retro-blue hover:text-black transition-all duration-300"
            >
              Explore Gadgets
            </button>
          </div>
        </div>
      </div>
    </template>

    <style>
    @keyframes starfield {
      from { background-position: 0 0 }
      to { background-position: 100% 100% }
    }

    .bg-starfield {
      background: radial-gradient(circle, transparent 20%, #000 20%, #000 80%, transparent 80%, transparent),
                  radial-gradient(circle, transparent 20%, #000 20%, #000 80%, transparent 80%, transparent) 50px 50px;
      background-size: 100px 100px;
      opacity: 0.2;
    }

    .animate-starfield {
      animation: starfield 60s linear infinite;
    }

    .glitch {
      position: relative;
      animation: glitch-anim 0.3s infinite;
    }

    @keyframes glitch-anim {
      0% { transform: translate(0) }
      20% { transform: translate(-2px, 2px) }
      40% { transform: translate(-2px, -2px) }
      60% { transform: translate(2px, 2px) }
      80% { transform: translate(2px, -2px) }
      100% { transform: translate(0) }
    }
    </style>
