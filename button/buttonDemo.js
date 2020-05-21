let btn=document.querySelector('button')
let body = document.querySelector('body')

btn.addEventListener('mouseover', ()=> {
    console.log('mouse over')
    let y = Math.floor(Math.random()*window.innerHeight)
    let x = Math.floor(Math.random()*window.innerWidth)
    console.log(y);
    console.log(x);
    btn.style.left = `${x}px`
    btn.style.top = `${y}px`
});
btn.addEventListener('click',()=>{
    btn.innerText = 'You Got Me !!'
    body.style.backgroundColor='#C7F0DE'
})
btn.addEventListener('mouseout',()=>{
    btn.innerText='CLick Me If you Can'
    body.style.backgroundColor='white'
})