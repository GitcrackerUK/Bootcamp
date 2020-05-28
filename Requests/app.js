// const firstRequest = new XMLHttpRequest;

// firstRequest.addEventListener('load',function(){
// 	console.log('First works!!');
// 	const response = JSON.parse(firstRequest.responseText)
// 	console.log(response);
// 	const responseURL = response.results[0].films[0]

// 	const secondRequest = new XMLHttpRequest;
// 	secondRequest.addEventListener('load',function(){
// 		console.log('Second works');
// 		const response = JSON.parse(secondRequest.responseText)
// 		console.log(response);
// 	})
// 	secondRequest.addEventListener('error',function(){
// 		console.log('Second error');
// 	})
// 	secondRequest.open('GET', responseURL)
// 	secondRequest.send()
// })
// firstRequest.addEventListener('error',()=>{
// 	console.log('Error!!!');
// })
// firstRequest.open('GET','http://swapi.dev/api/planets/')
// firstRequest.send();

// const prom = fetch('https://swapi.dev/api/planets/').then((res) => {
// 	console.log(res)
// 	let prom1 = res.json().then((res) => {
// 		console.log(res.results[0].name);
// 	}).catch((err)=> console.log(err))
// 	console.log(prom1);
// })
// .catch((err)=>{
// 	console.log(err);
// })

// console.log(prom);
//  fetch('https://swapi.dev/api/people/1/').then((res)=>{
// 	 console.log(res);
//  })

axios.get('https://swapi.dev/api/people').then((res)=>{
	for(let person of res.data.results){
		const tbody = document.querySelector('tbody')
		const row = document.createElement('tr')
		tbody.appendChild(row)
		const th = document.createElement('th')
		row.appendChild(th)
		th.setAttribute('scope','row')
		console.log(res.data.results);
		let {name,gender,height,mass,eye_color} = person
		const pers = {name,gender,height,mass,eye_color}
		for(let item in pers){
			const td = document.createElement('td')
			row.appendChild(td)
			td.innerText = pers[item]
		}
	}
})