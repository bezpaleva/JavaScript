'use strict';

var AUTHORS = ['А. С. Пушкин', 'Г. Ф. Лафкрафт', 'С. Кинг', 'Френк Герберт', 'Дарья Донцова', 'Х. Муракамьевич', 'Л. Н. Толстой', 'К. Маркс', 'С. Лукьяненко'];
var TITLES = ['Мастер и Маргарита', '1000 и одна ночь', 'Сказки', 'Сборник стихов №100500', 'Евлампия Романова и Соловей Разбойник', 'Капитал','Мцыри', 'Некрономикон', 'Басни', 'Еще какие-то стихи', 'Супер интересный детектив', 'Еще какое-то название', 'Допустим, книга', 'Дюна', 'Дети Дюны', 'Ну, погоди', 'Крылья, ноги и хвосты', 'Приключения Солнышкина', 'Психо', 'Рыбак с соколинного мыса', 'Как стать программистом за 6 дней', 'Что-то там еще', 'Нужно больше золота', 'Нужно построить зиккурат', 'Еще книга', 'Куда исчезли двемеры', 'Евгений Онегин', 'Преступление и наказание','Война и мир'];
var GENRE = ['Фантастика', 'Фэнтази', 'Детективы', 'Преключения', 'Проза', 'Ужасы', 'Мистика', 'Триллеры', 'Роман', 'Стихи', 'Поэзия', 'Драма', 'Философия', 'Биография', 'Вестерн', 'Культурология', 'Сказки', 'История'];
var COVER = ['Мягкий', 'Твердый', 'Скрепление скобкой', 'Cкрепление на пружину', 'Французский переплет'];
var getBooks = function () {
	let pages = [];

	for (let i = 0; i < 100; i++) {
		pages.push(Math.floor(Math.random () * 1000) + ' стр.' );
	}

	let books = [];
	for (let i = 0; i < 100; i++) {
		let newBook = {
			title : TITLES[Math.floor(Math.random () * TITLES.length)],
			author : AUTHORS[Math.floor(Math.random () * AUTHORS.length)],
			pages : pages[Math.floor(Math.random () * pages.length)],
			genre : GENRE[Math.floor(Math.random  () * GENRE.length)],
			cover : COVER[Math.floor(Math.random  () * COVER.length)]
		};
		books.push(newBook);
	}

	return books;
};

var loadBooks = function () {
	let loadedContent = getBooks();
	console.log(loadedContent[3].author);
	let fragment = document.createDocumentFragment();

	for (let i = 0; i < 100; i++) {
		let newParagraph = document.createElement('p');

		newParagraph.innerHTML = i + 1 + '. <b>' + loadedContent[i].title + '</b> / ' + loadedContent[i].author + ' / ' + loadedContent[i].pages + ' / ' + loadedContent[i].genre + ' / ' + loadedContent[i].cover ;
		fragment.appendChild(newParagraph);
	}

	document.querySelector('.list').appendChild(fragment);
};


window.addEventListener('load', loadBooks);
