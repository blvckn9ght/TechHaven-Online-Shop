<template>
      <div class="min-h-screen flex items-center justify-center bg-black">
        <!-- Animated Background -->
        <div class="absolute inset-0 bg-matrix animate-matrix"></div>

        <!-- Verify Email Card -->
        <div class="relative z-10 bg-black/50 backdrop-blur-md border-2 border-terminal-green rounded-lg p-8 w-full max-w-md">
          <!-- Title with Typewriter Effect -->
          <h1 class="text-4xl font-retro text-terminal-green mb-2 text-center typewriter">
            Verify Your Email
          </h1>
          <p class="font-mono text-terminal-green/80 text-center mb-8">
            Check your inbox (or spam folder) for the verification email.
          </p>

          <!-- Resend Button -->
          <button
            @click="resendVerificationEmail"
            class="w-full px-6 py-3 border-2 border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black transition-colors font-retro neon-button"
          >
            Resend Verification Email
          </button>
        </div>
      </div>
    </template>

    <script>
    import { auth, sendEmailVerification } from '../firebase'

    export default {
      methods: {
        async resendVerificationEmail() {
          try {
            await sendEmailVerification(auth.currentUser)
            alert('Verification email sent!')
          } catch (error) {
            console.error('Error resending verification email:', error.message)
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
    </style>
