'use strict';

var PRODUCT = ['Apple', 'Samsung', 'Dell', 'HP', 'Lenovo', 'Acer', 'Asus', 'MSI'];
var TITLES = ['MacBook', 'MacBook Pro', 'Y520', 'G5-7510', 'GE73 Raider', 'R450','GV72VR', 'ZenBook', 'Yoga 530', '141C', 'Наверняка тоже какой то хороший', 'Возможно этот лучше предыдущего', 'Ноут', 'Бук', 'Даже не знаю что это', 'Этот тоже советую', 'Еще никто не жаловался', 'Yoga 730', 'ipod', 'Gh234', 'FKH423', 'Старший', 'Лейтенант', 'Мальчик', 'Молодой', 'Все хотят', 'Потанцевать', 'С Тобой','YRZ322'];

var getProducts = function () {
	let price = [];

	for (let i = 0; i < 100; i++) {
		price.push(Math.floor(Math.random () * 100000) + ' цена (указана в евро) ' );
	}

	let products = [];
	for (let i = 0; i < 100; i++) {
		let newProduct = {
			product : PRODUCT[Math.floor(Math.random () * PRODUCT.length)],
			title : TITLES[Math.floor(Math.random () * TITLES.length)],
			price : price[Math.floor(Math.random () * price.length)]
		};
		products.push(newProduct);
	}

	return products;
};

var loadProducts = function () {
	let loadedContent = getProducts();
	console.log(loadedContent[3].product);
	let fragment = document.createDocumentFragment();

	for (let i = 0; i < 100; i++) {
		let newParagraph = document.createElement('p');

		newParagraph.innerHTML = i + 1 + '. <b>' + loadedContent[i].title + '</b> / ' + loadedContent[i].product + ' / ' + loadedContent[i].price;
		fragment.appendChild(newParagraph);
	}

	document.querySelector('.list').appendChild(fragment);
};


window.addEventListener('load', loadProducts);
