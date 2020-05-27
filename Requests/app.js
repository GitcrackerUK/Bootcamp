const firstRequest = new XMLHttpRequest;

firstRequest.addEventListener('load',function(){
	console.log('First works!!');
	const response = JSON.parse(firstRequest.responseText)
	console.log(response);
	const responseURL = response.results[0].films[0]

	const secondRequest = new XMLHttpRequest;
	secondRequest.addEventListener('load',function(){
		console.log('Second works');
		const response = JSON.parse(secondRequest.responseText)
		console.log(response);
	})
	secondRequest.addEventListener('error',function(){
		console.log('Second error');
	})
	secondRequest.open('GET', responseURL)
	secondRequest.send()
})
firstRequest.addEventListener('error',()=>{
	console.log('Error!!!');
})
firstRequest.open('GET','http://swapi.dev/api/planets/')
firstRequest.send();

