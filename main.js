let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

// Для кожної категорії створити об'єкт, який має лише одну властивість category, де буде ім'я категорії. Наприклад, let Kitchen = {category: 'kitchen'};
// Всім товарам з массивів kitchenProducts, devicesProducts, cosmeticsProducts добавити в якості об'єкта-прототипа об'єкти, ствоорені на першому кроці. Після цього, доповнити кожен товар своїми властивостями. 

let Kitchen = {category: 'kitchen'};
let Devices = {category: 'devices'};
let Cosmetics = {category: 'cosmetics'};

let kitchenResult = kitchenProducts.map(item => Object.setPrototypeOf({...item}, Kitchen));
console.log(kitchenResult);

let devicesResult = devicesProducts.map(item => Object.setPrototypeOf({...item}, Devices));
console.log(devicesResult);

let cosmeticsResult = cosmeticsProducts.map(item => Object.setPrototypeOf({...item}, Cosmetics));
console.log(cosmeticsResult);

let render = function(arr) {
	for (let i = 0; i < arr.length; i++) {
		document.write(`
		<h2 class="category__heading">Category: ${arr[i][0].category}</h2>
		<div class="category">
		`);
		for(let j = 0; j < arr[i].length; j++) {
			let currentItem = arr[i][j];
			document.write(`
				<div class="category__item">
					<img src="./images/${currentItem.type}.svg" alt="${currentItem.type}">
					<p class="heading">Name: <b> ${currentItem.type[0].toUpperCase() + currentItem.type.slice(1)} </b></p>
					<p class="price">price: <b> $${Array.isArray(currentItem.price) ? currentItem.price.join("-") : currentItem.price}</b></p>
				</div>
				`);
			}
		document.write(`</div>`);
	}
}


render([kitchenResult, devicesResult, cosmeticsResult]);