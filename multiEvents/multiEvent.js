// let body = document.querySelector('body')
// let div  = document.createElement('div')
// body.prepend(div)
// const input =document.createElement('input')
// div.append(input)
// input.setAttribute('id','username')
// input.setAttribute('type','text')
// input.setAttribute('placeholder','username')
// input.classList.add('form-control')
// input.classList.add('col-sm-2')
// input.classList.add('inp')

// let arr = []
// let str = ''

// console.log(arr.slice(0,-1));
// let addToArr=function(event){
//     if(event.key!=='Backspace'){
//         arr.push(event.key)
//     }
//     else if(event.key ==='Backspace'){
//         arr.pop()
//     }
//     str = arr.join('')
//      console.log(arr);
//      console.log(str);
// }
//   let keyDown = function(event){
//       console.log('Key down');
//   }
//   let keyUp = function(event){
//       console.log('key up');
//   }
//   let keypress = function(event){
//       console.log('Key press');
//   }


// input.addEventListener('keydown',keyDown);
// input.addEventListener('keyup',keyUp);
// input.addEventListener('keypress',keypress);
let addItems = document.querySelector('#addItem')
let items = document.querySelector('#items')

addItems.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if(!this.value)return   // check if value is not null
        const Li = document.createElement('li') // creates new li element
        Li.innerText = this.value //assign value to li 
        items.appendChild(Li)  //appends li with value to html 
        this.value = '' // resets value to empty string
    }
})