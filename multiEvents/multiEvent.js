var colorArray = [
    '#FF6633', '#FFB399', '#FF33FF',
    '#FFFF99', '#00B3E6','#E6B333', '#3366E6'
];
const createDivWithIds = () =>{
    let num = 0
    const cont = document.querySelector('.container');
    for (const color of colorArray) {
        const box = document.createElement('div')
        num += 1
        cont.append(box)
        box.classList.add('box')
        box.setAttribute('id', `${num}`)
        box.style.backgroundColor = color;
        box.addEventListener('click', () => logColor(box))
        box.addEventListener('mouseover',grow)
        box.addEventListener('mouseout',shrink)
    }
}
createDivWithIds()
let divs = document.querySelectorAll('.container div')

let changeEvenHeight = function (list, height = 300) {
    for (const div of list) {
        if (div.getAttribute('id') % 2 == 0) {
            div.style.height = `${height}px`

        }
    }
}

function grow(){
let divs = document.querySelectorAll('.container div')
    for(const div of divs){
        this.classList.add('grow');
    }
  
}
function shrink(){
let divs = document.querySelectorAll('.container div')
    for(const div of divs){
        this.classList.remove('grow');
    }
}
const logColor = function (box) {
    console.log(`Clicked on ${box.style.backgroundColor}`)
}
let changeRadius = function (list, radius) {
    for (const el of list) {
        el.style.borderRadius = `${radius}px`
    }
}
changeRadius(divs, 20)
changeEvenHeight(divs);
