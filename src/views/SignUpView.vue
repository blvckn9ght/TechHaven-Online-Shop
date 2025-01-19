<template>
      <div class="min-h-screen flex items-center justify-center bg-black">
        <!-- Animated Background -->
        <div class="absolute inset-0 bg-matrix animate-matrix"></div>

        <!-- Signup Card -->
        <div class="relative z-10 bg-black/50 backdrop-blur-md border-2 border-terminal-green rounded-lg p-8 w-full max-w-md">
          <!-- Title with Typewriter Effect -->
          <h1 class="text-4xl font-retro text-terminal-green mb-2 text-center typewriter">
            Sign Up for TechHaven
          </h1>
          <p class="font-mono text-terminal-green/80 text-center mb-8">
            Create your account to access the mainframe...
          </p>

          <!-- Signup Form -->
          <form @submit.prevent="handleSignUp" class="space-y-6">
            <!-- Email Field -->
            <div>
              <label for="email" class="block font-mono text-terminal-green mb-2">
                Your digital contact
              </label>
              <div class="relative">
                <input
                  type="email"
                  id="email"
                  v-model="email"
                  placeholder="youremail@example.com"
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
                Choose your secure password
              </label>
              <div class="relative">
                <input
                  type="password"
                  id="password"
                  v-model="password"
                  placeholder="Enter a strong password"
                  class="w-full bg-transparent border-b-2 border-terminal-green focus:outline-none text-terminal-green placeholder-terminal-green/50 pl-8"
                  required
                >
                <span class="absolute left-0 top-1/2 transform -translate-y-1/2 text-terminal-green">
                  🔒
                </span>
              </div>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full px-6 py-3 border-2 border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black transition-colors font-retro neon-button"
            >
              Join TechHaven
            </button>

            <!-- Sign In Link -->
            <p class="text-center font-mono text-terminal-green">
              Already have an account? 
              <router-link 
                to="/signin" 
                class="text-retro-blue hover:underline glitch-link"
              >
                Access the mainframe here
              </router-link>
            </p>
          </form>
        </div>
      </div>
    </template>

    <script>
    import { auth, createUserWithEmailAndPassword, sendEmailVerification } from '../firebase'

    export default {
      data() {
        return {
          email: '',
          password: ''
        }
      },
      methods: {
        async handleSignUp() {
          try {
            const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password)
            await sendEmailVerification(userCredential.user)
            this.$router.push('/verify-email')
          } catch (error) {
            console.error('Error signing up:', error.message)
          }
        }
      }
    }
    </script>

    <style>
    @keyframes matrix {
      from { background-position: 0 0 }
      to { background-position: 100% 100% }
    }

    .bg-matrix {
      background: radial-gradient(circle, transparent 20%, #000 20%, #000 80%, transparent 80%, transparent),
                  radial-gradient(circle, transparent 20%, #000 20%, #000 80%, transparent 80%, transparent) 50px 50px;
      background-size: 100px 100px;
      opacity: 0.2;
    }

    .animate-matrix {
      animation: matrix 60s linear infinite;
    }

    @keyframes typewriter {
      from { width: 0 }
      to { width: 100% }
    }

    .typewriter {
      overflow: hidden;
      white-space: nowrap;
      animation: typewriter 2s steps(40, end);
    }

    @keyframes neon {
      0% { box-shadow: 0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 40px #39FF14 }
      50% { box-shadow: 0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 40px #39FF14, 0 0 80px #39FF14 }
      100% { box-shadow: 0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 40px #39FF14 }
    }

    .neon-button {
      animation: neon 1.5s infinite alternate;
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
