export default {
      content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
      ],
      theme: {
        extend: {
          fontFamily: {
            'retro': ['"Press Start 2P"', 'cursive'],
            'mono': ['"Roboto Mono"', 'monospace']
          },
          colors: {
            'terminal-green': '#39FF14',
            'retro-blue': '#00FFFF',
            'matrix-green': '#00FF00'
          }
        }
      },
      plugins: []
    }
