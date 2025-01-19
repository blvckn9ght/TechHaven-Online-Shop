<template>
      <div class="space-y-20">
        <HeroSection />
        <CategoryGrid :categories="categories" />
        <ProductCarousel :products="products" />
        <TestimonialChat />
        <EasterEggSection />
        <FooterSection />
      </div>
    </template>

    <script>
    import HeroSection from '../components/HeroSection.vue'
    import CategoryGrid from '../components/CategoryGrid.vue'
    import ProductCarousel from '../components/ProductCarousel.vue'
    import TestimonialChat from '../components/TestimonialChat.vue'
    import EasterEggSection from '../components/EasterEggSection.vue'
    import FooterSection from '../components/FooterSection.vue'

    export default {
      components: {
        HeroSection,
        CategoryGrid,
        ProductCarousel,
        TestimonialChat,
        EasterEggSection,
        FooterSection
      },
      data() {
        return {
          categories: [
            {
              icon: '🖥️',
              title: 'Gadgets',
              description: 'More tech than your average bat cave',
              color: 'text-retro-blue'
            },
            {
              icon: '⌨️',
              title: 'Accessories',
              description: 'Level up your setup',
              color: 'text-terminal-green'
            },
            {
              icon: '🔧',
              title: 'DIY Kits',
              description: 'Build your own tech empire',
              color: 'text-matrix-green'
            }
          ],
          products: [
            {
              name: 'Quantum Keyboard',
              image: 'https://placehold.co/400x300?text=Quantum+Keyboard',
              description: 'Type across dimensions with this futuristic keyboard',
              price: '$199'
            },
            {
              name: 'Holo Display',
              image: 'https://placehold.co/400x300?text=Holo+Display',
              description: 'See the future in 3D with this holographic display',
              price: '$499'
            },
            {
              name: 'Neural Interface',
              image: 'https://placehold.co/400x300?text=Neural+Interface',
              description: 'Control devices with your mind',
              price: '$799'
            }
          ]
        }
      }
    }
    </script>
