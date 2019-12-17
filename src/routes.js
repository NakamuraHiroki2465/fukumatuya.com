import Enkai from './components/FoodMenu/Enkai.vue'
import Lunch from './components/FoodMenu/lunch.vue'
import MainPage from './components/MainPage.vue'
import Contact from './components/contact.vue'
import Ohirasan from './components/Ohirasan.vue'
import Recruit from './components/recruit.vue'
import About from './components/About.vue'


export const routes = [
    {
        path:'/',
        component:MainPage
    },
    {
        path:'/dinner',
        component: Enkai
    },
    {
        path:'/lunch',
        component: Lunch
    },
    {
        path:'/about',
        component:About
    },
    {
        path:'/contact',
        component: Contact
    },
    {
        path:'/ohirasan',
        component: Ohirasan
    },
    {
        path:'/recruit',
        component: Recruit
    }
]