import { createStore } from 'vuex'

    export default createStore({
      state: {
        user: null,
        isLoggedIn: false,
        dashboard: {
          widgets: []
        }
      },
      mutations: {
        SET_USER(state, user) {
          state.user = user
          state.isLoggedIn = true
        },
        ADD_WIDGET(state, widget) {
          state.dashboard.widgets.push(widget)
        }
      },
      actions: {
        login({ commit }, credentials) {
          // Simulate login
          const user = {
            name: 'TechHaven User',
            avatar: '/assets/avatars/retro.png'
          }
          commit('SET_USER', user)
        }
      }
    })
