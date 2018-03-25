import Vue from 'vue';
import template from '../../../html/home.html'
import formRender from '../helpers/formRender'

export default {
    template,
    data(){
        return {
            form:{
                title: '',
                description: '',
                questions: [

                ],
            },
            questionIndex: 0,
            variantValue: 0,
        }
    },

   methods:{
        deleteQuestion(index){
            this.form.questions.splice(index,1);
        },
        deleteVariant(index,variantIndex){
           return this.form.questions[index].variants.splice(index,1);
        },
        setForm(e){
            e.preventDefault(e);
            this.$store.dispatch({type: 'GET_FORM', form: this.form});
            return formRender(this.$store.state, 'box-body-2');
        },
        createForm(){
            return this.createFormFlag = true
        },
       addQuestions(e){
            e.preventDefault(e);
            let q = {
               question: '',
                   type: '',
                   name: '',
                   variants: [{
                       variant: '',
                       value: ''
                   }],
           };
           this.form.questions.push(q); //добавляем объект в хранилище компонента

           this.form.questions.forEach((item, index)=>{
               item.name = 'question-'+index;
           }) //присваиваем каждому объекту уникальный атрибут name
       },
       addVariant(e, index){
           e.preventDefault(e);
           let v = {
               variant: '',
               value: ''
           };
           this.form.questions[index].variants.push(v);
           this.form.questions[index].variants.forEach((item, index)=>{
               item.value = 'variant-' + index;
           })
       },
    },
    computed:{
        formCheck(){
            if(this.form.title.length&&this.form.description.length){
                return true;
            }else{
                return false;
            }
        },
    }
};