import Vue from 'vue';
import template from '../../../html/form.html'
import formRender from '../helpers/formRender'

export default {
    template,

    mounted(){
        formRender(this.$store.state, 'box-body');
    }
}