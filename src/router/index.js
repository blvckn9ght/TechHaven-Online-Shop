import { createRouter, createWebHistory } from 'vue-router'
    import HomeView from '../views/HomeView.vue'
    import SignInView from '../views/SignInView.vue'
    import SignUpView from '../views/SignUpView.vue'
    import VerifyEmailView from '../views/VerifyEmailView.vue'

    const routes = [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/signin',
        name: 'signin',
        component: SignInView
      },
      {
        path: '/signup',
        name: 'signup',
        component: SignUpView
      },
      {
        path: '/verify-email',
        name: 'verify-email',
        component: VerifyEmailView
      }
    ]

    const router = createRouter({
      history: createWebHistory(),
      routes
    })

    export default router
