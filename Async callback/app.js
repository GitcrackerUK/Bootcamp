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

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const pages = {
//                 '/users': [{
//                         id: 1,
//                         username: 'Bilbo'
//                     },
//                     {
//                         id: 2,
//                         username: 'Esmeralda'
//                     }
//                 ],
//                 '/about': 'This is about page!!!'
//             };
//             const data = pages[url];
//             if (data) {
//                 resolve({
//                     status: 200,
//                     data
//                 });
//             } else {
//                 reject({
//                     status: 404
//                 });
//             }
//         }, 1000)
//     })
// }

// fakeRequest('/users').then((res) => {
//     console.log(res.data[0].username);
//     console.log('Status code', res.status);
//     console.log('Data:', res.data);
//     console.log('REQUEST WORKED!!')
// }).catch((res) => {
//     console.log('Status code', res.status);
//     console.log('REQUEST FAILED!!')
// })

// fakeRequest('/about').then((res) => {
//     console.log('Status code', res.status);
//     console.log('Data:', res.data);
//     console.log('REQUEST WORKED!!')
// }).catch((res) => {
//     console.log('Status code', res.status);
//     console.log('REQUEST FAILED!!')
// })
// // fakeRequest('/user').

// let result = fakeRequest('/users').then((res) => {
//     users = res.data;
//     let body = document.querySelector('body')
//     let ul = document.createElement('ul')

//     body.appendChild(ul)
//     console.log(res.status);
//     for (let user of users) {
//         let li = document.createElement('li')
//         ul.appendChild(li)
//         li.innerHTML = `user ${user.id} with name: <b>${user.username}</b> won competition, congratulation.` 
//     }
// })

const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users': [{
						id: 1,
						username: 'Bilbo'
					},
					{
						id: 5,
						username: 'Esmerelda'
					}
				],
				'/users/1': {
					id: 1,
					username: 'Bilbo',
					upvotes: 360,
					city: 'Lisbon',
					topPostId: 454321
				},
				'/users/5': {
					id: 5,
					username: 'Esmerelda',
					upvotes: 571,
					city: 'Honolulu'
				},
				'/posts/454321': {
					id: 454321,
					title: 'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
				},
				'/about': 'This is the about page!'
			};
			const data = pages[url];
			if (data) {
				resolve({
					status: 200,
					data
				}); //resolve with a value!
			} else {
				reject({
					status: 404
				}); //reject with a value!
			}
		}, 1000);
	});
};

// fakeRequest('/users').then((res) => {
// 	const userId = res.data[0].id
// 	fakeRequest(`/uses/${userId}`).then((res) => {
// 		const userPost = res.data.topPostId
// 		// console.log(userPost);

// 		fakeRequest(`/posts/${userPost}`).then((res) => {
// 			console.log(res.data.title);

// 		})
// 	})
// }).catch((err)=>{
// 	console.log(`Outer request ${err.status}`)
// })

// fakeRequest('/users')
// 	.then((res) => {
// 		const userId = res.data[0].id
// 		console.log(res);
// 		return fakeRequest(`/users/${userId}`);
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		const user = res.data.topPostId
// 		return fakeRequest(`/posts/${user}`)
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		console.log(res.data.title);
// 	})
// 	.catch((err) => {
// 		console.log(`Something went wrong:` , err)
// 	})