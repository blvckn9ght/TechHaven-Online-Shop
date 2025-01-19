<template>
      <div class="min-h-screen bg-black text-terminal-green font-mono">
        <Navbar />
        <router-view />
      </div>
    </template>

    <script>
    import Navbar from './components/Navbar.vue'

    export default {
      components: {
        Navbar
      }
    }
    </script>
