// const btn = document.querySelector('button')
// // setTimeout(()=>{
// //     btn.style.transform = 'translateX(100px)'
// //     setTimeout(()=>{
// //         btn.style.transform = 'translateX(200px)';
// //         setTimeout(()=>{
// //             btn.style.transform = 'translateX(300px)';
// //             setTimeout(()=>{
// //                 btn.style.transform = 'translateX(400px)';
// //             },1000)
// //         },1000)
// //     },1000)
// // },1000)

// const moveX = (element, amount, delay, callback) => {
//     const bodyBoundary = document.body.clientWidth;
//     const currentLeft = element.getBoundingClientRect().left;
//     const currentRight = element.getBoundingClientRect().right;
//     if (currentRight + amount > bodyBoundary ){
//         console.log('Its too much');
//     } else {
//         setTimeout(() => {
//             element.style.transform = `translateX(${ currentLeft +amount}px)`
//             console.log(btn.getBoundingClientRect().left);
//             console.log(document.body.clientWidth);
//             if (callback) callback();
//         }, delay);
//     };

// }

// moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//         moveX(btn, 100, 1000, () => {
//             moveX(btn, 100, 1000, () => {
//                 moveX(btn, 100, 1000,()=>{
//                     moveX(btn,100,100)
//                 })
//             })
//         })
//     })
// });

// const getDog = new Promise((resolved,reject)=>{
// const ran = Math.random()
// if(ran<0.5){
//     resolved()
// }else{
//     reject()
// }
// })

// getDog.then(()=>{
//     console.log('hello');
// })
// getDog.catch(()=>{
//     console.log('Bye');
// })

// const getDog = 
// function(){
// return new Promise((resolved,reject)=>{
//     setTimeout(()=>{
//         const ran = Math.random()
//         if(ran<0.5){
//             resolved()
//         }else{
//             reject()
//         }
//     },5000)
//     })
// }
    
//     getDog().then(()=>{
//         console.log('hello');
//     }).catch(()=>{
//         console.log('Bye');
//     })

