<template>
      <div class="min-h-screen flex items-center justify-center bg-black">
        <!-- Animated Background -->
        <div class="absolute inset-0 bg-starfield animate-starfield"></div>

        <!-- Login Card -->
        <div class="relative z-10 bg-black/50 backdrop-blur-md border-2 border-terminal-green rounded-lg p-8 w-full max-w-md">
          <!-- Title -->
          <h1 class="text-4xl font-retro text-terminal-green mb-2 text-center">
            Welcome Back to TechHaven
          </h1>
          <p class="font-mono text-terminal-green/80 text-center mb-8">
            Log in to continue your journey into the world of tech.
          </p>

          <!-- Login Form -->
          <form @submit.prevent="handleLogin" class="space-y-6">
            <!-- Email Field -->
            <div>
              <label for="email" class="block font-mono text-terminal-green mb-2">
                Email
              </label>
              <div class="relative">
                <input
                  type="email"
                  id="email"
                  v-model="email"
                  placeholder="Your gateway to the tech universe!"
                  class="w-full bg-transparent border-b-2 border-terminal-green focus:outline-none text-terminal-green placeholder-terminal-green/50 pl-8"
                  required
                >
                <span class="absolute left-0 top-1/2 transform -translate-y-1/2 text-terminal-green">
                  ✉️
                </span>
              </div>
            </div>

            <!-- Password Field -->
            <div>
              <label for="password" class="block font-mono text-terminal-green mb-2">
                Password
              </label>
              <div class="relative">
                <input
                  type="password"
                  id="password"
                  v-model="password"
                  placeholder="Stay secure in the haven!"
                  class="w-full bg-transparent border-b-2 border-terminal-green focus:outline-none text-terminal-green placeholder-terminal-green/50 pl-8"
                  required
                >
                <span class="absolute left-0 top-1/2 transform -translate-y-1/2 text-terminal-green">
                  🔒
                </span>
              </div>
              <router-link 
                to="/forgot-password" 
                class="block text-right font-mono text-terminal-green/80 hover:text-retro-blue mt-2"
              >
                Forgot your password?
              </router-link>
            </div>

            <!-- Login Button -->
            <button
              type="submit"
              class="w-full px-6 py-3 border-2 border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black transition-colors font-retro animate-pulse hover:animate-none"
            >
              Login to TechHaven
            </button>

            <!-- Social Login -->
            <div class="flex items-center justify-center space-x-4">
              <button 
                class="p-2 border-2 border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black transition-colors rounded-full"
              >
                <img src="https://placehold.co/24x24?text=G" alt="Google" class="w-6 h-6">
              </button>
              <button 
                class="p-2 border-2 border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black transition-colors rounded-full"
              >
                <img src="https://placehold.co/24x24?text=GH" alt="GitHub" class="w-6 h-6">
              </button>
            </div>

            <!-- Register Link -->
            <p class="text-center font-mono text-terminal-green">
              Don't have an account? 
              <router-link 
                to="/register" 
                class="text-retro-blue hover:underline"
              >
                Join the Haven!
              </router-link>
            </p>
          </form>
        </div>
      </div>
    </template>

    <script>
    export default {
      data() {
        return {
          email: '',
          password: ''
        }
      },
      methods: {
        handleLogin() {
          // Implement login logic
          console.log('Logging in with:', this.email, this.password)
          this.$router.push('/dashboard') // Redirect to dashboard after login
        }
      }
    }
    </script>

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

    input:focus {
      animation: glitch 0.3s infinite;
    }

    @keyframes glitch {
      0% { transform: translate(0) }
      20% { transform: translate(-2px, 2px) }
      40% { transform: translate(-2px, -2px) }
      60% { transform: translate(2px, 2px) }
      80% { transform: translate(2px, -2px) }
      100% { transform: translate(0) }
    }
    </style>
