
let form =document.forms.form1;
let elem=form.elements.emailInput;
let list=document.querySelector('.list');
form.onsubmit=()=>{
    event.preventDefault(false);
    if(elem.value.toString().match(/[-.\w]+@([\w-]+\.)+[\w-]+/g)){
        let li=document.createElement('li');
        li.classList.add('list-item');
        let span =document.createElement('span');
        span.textContent=elem.value;
        let btn=document.createElement('button');
        btn.classList.add('delete');
        btn.innerHTML='&#10006';
        li.append(span);
        li.append(btn);
        list.append(li);
        elem.value='';
    }else{
        elem.value="не верно указан email , попробуйте снова";
    }
}
elem.onfocus=()=>{
    if(elem.value=="не верно указан email , попробуйте снова")
        elem.value='';
}
document.onclick=(event)=>{
    if(event.target.classList.contains('delete')){
        event.target.parentElement.remove();
    }
}


