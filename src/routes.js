import Enkai from './components/FoodMenu/Enkai.vue'
import FoodMenu from './components/FoodMenu/FoodMenu.vue'
import Meibutu from './components/FoodMenu/Meibutu.vue'
import MainPage from './components/MainPage.vue'
import Form from './components/form.vue'
import Info from './components/info.vue'
import Recruit from './components/recruit.vue'


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
        path:'/menu',
        component: FoodMenu
    },
    {
        path:'/speciality',
        component: Meibutu
    },
    {
        path:'/form',
        component: Form
    },
    {
        path:'/tourisminfo',
        component: Info
    },
    {
        path:'/recruit',
        component: Recruit
    }
]