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

// const form = document.querySelector('form')
// const email = document.querySelector('#exampleInputEmail1')
// const pass = document.querySelector('#exampleInputPassword1')
// const option = document.querySelector('#exampleFormControlSelect1')
// const radio = document.querySelector('#radio')
// const radioItem = document.querySelectorAll('#radio input')
// const range = document.querySelector('#ex1Slider')
// const number = document.querySelector('#number')
// const date = document.querySelector('#start')
// const check = document.querySelector('#exampleCheck1')
// const rad = document.querySelectorAll('#rad input')
// const button = document.querySelector('button')
// const subformValue = {}
// const formValue = {}

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     subformValue['email'] = email.value
//     subformValue['pass'] = pass.value
//     subformValue['option'] = option.value
//     subformValue['range'] = range.value
//     subformValue['number'] = number.value
//     subformValue['date'] = date.value
//     subformValue['Agree'] = (check.checked)?'Yes':'No';
//     radioItem.forEach((item)=>{
//         if(item.checked===true){
//             subformValue['radio'] = item.value
//         }
//     })
//     console.log(subformValue);
// })
// email.addEventListener('input', (e) => {
//     formValue['email'] = e.target.value;
// })
// pass.addEventListener('input', (e) => {
//     formValue['password'] = e.target.value;
// })
// radio.addEventListener('input', (e) => {
//     formValue['radio'] = e.target.value
// })
// option.addEventListener('input', (e) => {
//     formValue['option'] = e.target.value
// })
// range.addEventListener('input', (e) => {
//     formValue['range'] = e.target.value
// })
// number.addEventListener('input', (e) => {
//     formValue['number'] = e.target.value
// })
// date.addEventListener('input', (e) => {
//     formValue['date'] = e.target.value
// })
// check.addEventListener('input', (e) => {
//     formValue['Agree'] = (e.target.checked)?'Yes':'No';
//     console.log(formValue);
// })
const form = document.querySelector('form')
const email = document.querySelector('#exampleInputEmail1')
const pass = document.querySelector('#exampleInputPassword1')
const option = document.querySelector('#exampleFormControlSelect1')
const radio = document.querySelector('#radio')
const radioItem = document.querySelectorAll('#radio input')
const range = document.querySelector('#ex1Slider')
const number = document.querySelector('#number')
const date = document.querySelector('#start')
const check = document.querySelector('#exampleCheck1')
const rad = document.querySelectorAll('#rad input')
const button = document.querySelector('button')
const subformValue = {}
const formValue = {}


let nonLoopInput = [email,pass,option,range,number,date,check ]

let loopInputs = [radioItem,rad]

for(let i of nonLoopInput){
    i.addEventListener('input',(event)=>{
        if(event.target.name==='terms'){
            formValue[event.target.name]=(event.target.checked)?'Agree':'Disagree'
        }else{
            formValue[event.target.name]=event.target.value;
        }
    })
}
for(let i of loopInputs){
    for(let j of i){
        j.addEventListener('input',(event)=>{
        formValue[event.target.name]=event.target.value
        })
    }
}