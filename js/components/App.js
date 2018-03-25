import Vue from 'vue'
import template from '../../html/App.html'
import Home from './pages/home'
import Form from './pages/form'
import Navigation from './navigation'

export default Vue.component('app',{
    template,
    components:{
        Home: Home,
        Form: Form,
        Navigation: Navigation,
    }
})