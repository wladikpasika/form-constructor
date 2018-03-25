import Vue from 'vue';
export default {

    GET_FORM(context, form) {
        context.commit('SET_FORM', form.form)


    }
}