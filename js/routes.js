import Home from './components/pages/home'
import Form from './components/pages/form'

// тут мы декларируем все роуты приложения (какие компоненты за какие адреса отвечают)
export default [
    {
        name: 'home',
        component: Home,
        path: '/'
    },
    {
        name: 'form',
        component: Form,
        path: '/form'
    }
]
