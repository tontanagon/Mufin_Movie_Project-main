import { createRouter , createWebHistory } from 'vue-router'
import login from './pages/login.vue'
import signup from './pages/signup.vue'
import home from './pages/home.vue'
import populary from './pages/populary.vue'
import category from './pages/category.vue'

const routes = [
{path: '/populary' , component: populary},
{path: '/category' , component: category},
{path: '/login' , component: login },
{path: '/signup' , component: signup },
{path: '/' , component: home}
]

const route = createRouter({ 
    history: createWebHistory(),
    routes,
})


export default route