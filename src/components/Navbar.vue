<template>
      <nav class="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md z-50 border-b border-terminal-green/20">
        <div class="container mx-auto px-4 flex items-center justify-between h-16">
          <!-- Logo -->
          <router-link to="/" class="text-2xl font-retro text-terminal-green hover:text-retro-blue transition-colors">
            TechHaven
          </router-link>

          <!-- Action Icons -->
          <div class="flex items-center space-x-6">
            <!-- Search Toggle -->
            <div class="relative">
              <button 
                class="text-terminal-green hover:text-retro-blue transition-colors"
                @click="toggleSearch"
              >
                🔍
              </button>
              <input 
                v-if="isSearchOpen"
                type="text" 
                placeholder="Search products..."
                class="absolute right-0 top-10 bg-black border border-terminal-green text-terminal-green px-2 py-1 rounded-md w-64"
                v-model="searchQuery"
                @keyup.enter="performSearch"
              >
            </div>

            <!-- Cart Icon -->
            <button 
              class="relative text-terminal-green hover:text-retro-blue transition-colors"
              @click="toggleCart"
            >
              🛒
              <span 
                v-if="cartCount > 0"
                class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5"
              >
                {{ cartCount }}
              </span>
            </button>

            <!-- User Dropdown -->
            <div class="relative">
              <button 
                class="text-terminal-green hover:text-retro-blue transition-colors"
                @click="toggleUserDropdown"
              >
                👤
              </button>
              <div 
                v-if="isUserDropdownOpen"
                class="absolute right-0 top-10 bg-black border border-terminal-green rounded-md w-48"
              >
                <router-link 
                  to="/signin"
                  class="block w-full text-left px-4 py-2 text-terminal-green hover:bg-terminal-green hover:text-black"
                  @click="isUserDropdownOpen = false"
                >
                  Sign In
                </router-link>
                <router-link 
                  to="/signup"
                  class="block w-full text-left px-4 py-2 text-terminal-green hover:bg-terminal-green hover:text-black"
                  @click="isUserDropdownOpen = false"
                >
                  Sign Up
                </router-link>
              </div>
            </div>

            <!-- Mobile Menu Toggle -->
            <button 
              class="md:hidden text-terminal-green hover:text-retro-blue transition-colors"
              @click="isMenuOpen = !isMenuOpen"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <router-link 
              v-for="link in primaryLinks"
              :key="link.name"
              :to="link.path"
              class="font-mono text-terminal-green hover:text-retro-blue transition-colors relative group"
            >
              {{ link.name }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-retro-blue transition-all group-hover:w-full"></span>
            </router-link>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div 
          v-if="isMenuOpen"
          class="md:hidden bg-black/95 backdrop-blur-md"
        >
          <div class="px-4 py-2 space-y-2">
            <router-link 
              v-for="link in allLinks"
              :key="link.name"
              :to="link.path"
              class="block font-mono text-terminal-green hover:text-retro-blue transition-colors"
              @click="isMenuOpen = false"
            >
              {{ link.name }}
            </router-link>
          </div>
        </div>
      </nav>
    </template>

    <script>
    export default {
      data() {
        return {
          isMenuOpen: false,
          isSearchOpen: false,
          isUserDropdownOpen: false,
          searchQuery: '',
          primaryLinks: [
            { name: 'Home', path: '/' },
            { name: 'Shop', path: '/shop' },
            { name: 'Categories', path: '/categories' }
          ],
          secondaryLinks: [
            { name: 'About Us', path: '/about' },
            { name: 'Contact', path: '/contact' }
          ],
          cartCount: 3 // Example cart count
        }
      },
      computed: {
        allLinks() {
          return [...this.primaryLinks, ...this.secondaryLinks]
        }
      },
      methods: {
        toggleSearch() {
          this.isSearchOpen = !this.isSearchOpen
          if (this.isSearchOpen) {
            this.isUserDropdownOpen = false
          }
        },
        toggleUserDropdown() {
          this.isUserDropdownOpen = !this.isUserDropdownOpen
          if (this.isUserDropdownOpen) {
            this.isSearchOpen = false
          }
        },
        performSearch() {
          // Implement search functionality
          console.log('Searching for:', this.searchQuery)
        },
        toggleCart() {
          // Implement cart toggle logic
        }
      }
    }
    </script>

    <style>
    /* Glitch effect for hover */
    .group:hover {
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
