import Enkai from './components/FoodMenu/Enkai.vue'
import Lunch from './components/FoodMenu/lunch.vue'
import MainPage from './components/MainPage.vue'
import Contact from './components/contact.vue'
import About from './components/About.vue'
import Access from './components/Access.vue'
import Recruit from './components/recruit.vue'
import Bento from './components/FoodMenu/bento.vue'

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
        path:'/access',
        component: Access
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
        path:'/recruit',
        component: Recruit
    },
    {
        path:'/bento',
        component: Bento
    }
]