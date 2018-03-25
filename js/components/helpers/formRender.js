export default function formRender(store, Idelem){
    const domElem = document.getElementById(Idelem);

    if(store.form.questions){
        store.form.questions.forEach((question)=>{
            const div = document.createElement('div');//создаем блок form-group
            const label = document.createElement('label');//создаем блок с названием вопроса label
            const div_8 = document.createElement('div'); //создаем блок, задающий ширину полю
            label.innerHTML = `${question.question}`;
            div.className = 'form-group';
            label.className = 'col-sm-4';
            div_8.className = 'col-sm-8';

            if(question.type==='number'||question.type==='text'||question.type==='textarea'){
                const input = document.createElement(question.type==='textarea'
                    ?'textarea'
                    :'input'); //input, может быть любым полем, которое принимает значение
                input.setAttribute('type', question.type);
                input.setAttribute('placeholder',
                    (question.type==='text'||question.type==='textarea')
                        ?'Введите текст'
                        :'Введите число');
                input.className = 'form-control';
                input.setAttribute('id', question.name);
                input.setAttribute('name', question.name);
                div_8.appendChild(input);
            }
            else if(question.type==='checkbox'||question.type==='radio'){
                question.variants.forEach((variant)=>{
                    const input = document.createElement('input');
                    const divButton = document.createElement('div');
                    const labelButton = document.createElement('label');
                    const variantTextNode = document.createTextNode(variant.variant);
                    divButton.className = question.type;
                    input.setAttribute('type', question.type);
                    input.setAttribute('name', question.name);
                    input.setAttribute('value', true);
                    labelButton.appendChild(input);
                    labelButton.appendChild(variantTextNode);
                    divButton.appendChild(labelButton);
                    div_8.appendChild(divButton)
                })
            }
            else if(question.type==='select'){
                const select = document.createElement('select');
                select.className = 'form-control';
                select.setAttribute('name', question.name);
                question.variants.forEach((variant)=>{
                    const option = document.createElement('option');
                    const variantTextNode = document.createTextNode(variant.variant);
                    option.setAttribute('value', variant.value);
                    option.appendChild(variantTextNode);
                    select.appendChild(option);
                });
                div_8.appendChild(select)
            }
            div.appendChild(label);
            div.appendChild(div_8);
            domElem.appendChild(div);
        });
    }
}
