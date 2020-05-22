// let form = document.querySelector('form')
// const email = document.querySelector('#exampleInputEmail1');
// const pass = document.querySelector('#exampleInputPassword1');
// const check = document.querySelector('#exampleCheck1')
// const sub = document.querySelector('#sub');
// const formData = {}

// form.addEventListener('submit', function (e) {
//     console.log(e);
//     submit()
//     e.preventDefault()
// })

// const submit = function (e) {
//     const emailVal = email.value;
//     const passVal = pass.value;
//     const checkVal = (check.checked) ? 'Yes' : 'No';
//     console.log(`Email is:${emailVal} \nPass is: ${passVal} \nIs checked: ${checkVal}`)
// }

// email.addEventListener('input',(e)=>{formData['email']= e.target.value})
// pass.addEventListener('input',(e)=> formData['password']=e.target.value)
// check.addEventListener('input',(e)=> {formData['check']=e.target.checked })
const form = document.querySelector('form')
const email = document.querySelector('#exampleInputEmail1')
const pass = document.querySelector('#exampleInputPassword1')
const option = document.querySelector('#exampleFormControlSelect1')
const radio = document.querySelector('#radio')
const range = document.querySelector('#ex1Slider')
const number = document.querySelector('#number')
const date = document.querySelector('#start')
const check = document.querySelector('#exampleCheck1')
const button = document.querySelector('button')
const formValue= {}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    formValue['email']=email.value
    formValue['pass']=pass.value
    formValue['option']=option.value
    formValue['radio']=radio.value
    formValue['range']=range.value
    formValue['number']=number.value
    formValue['date']=date.value
    formValue['check']=check.checked
    console.log(formValue);
    console.log(e);
})
email.addEventListener('input',(e)=>{
formValue['email']=e.target.value;
console.log(e.target.value);
console.log(formValue);
})

radio.addEventListener('input',(e)=>{
    formValue['radio']=e.target.value
})