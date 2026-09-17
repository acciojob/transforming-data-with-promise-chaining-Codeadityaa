const num = document.getElementById("ip");
const div = document.getElementById("output");
const btn = document.getElementById("btn");


function promise1(num){
	return new Promise((resolve) =>{
		setTimeout(() =>{
			div.textContent = `Result: ${num}`;
			resolve(num);
		}, 2000)
	});
}

function promise2(num){
	return new Promise((resolve) =>{
		setTimeout(() =>{
			div.textContent = `Result: ${num*2}`;
			resolve(num*2);
		}, 2000)
	});
}

function promise3(num){
	return new Promise((resolve) =>{
		setTimeout(() =>{
			div.textContent = `Result: ${num - 3}`;
			resolve(num - 3);
		}, 1000)
	});
}

function promise4(num){
	return new Promise((resolve) =>{
		setTimeout(() =>{
			div.textContent = `Result: ${num/2}`;
			resolve(num/2);
		}, 1000)
	});
}

function promise5(num){
	return new Promise((resolve) =>{
		setTimeout(() =>{
			div.textContent = `Final Result: ${num + 10}`;
			resolve(num+10);
		}, 1000)
	});
}


btn.addEventListener("click", () => {
	let numVal = Number(num.value.trim());
	promise1(numVal).then((num1) =>{
		return promise2(num1);
	}).then((num2) =>{
		return promise3(num2);
	}).then((num3) =>{
		return promise4(num3);
	}).then((num4) =>{
		return promise5(num4);
	}).then((num5) =>{
		console.log("done");
	})
})