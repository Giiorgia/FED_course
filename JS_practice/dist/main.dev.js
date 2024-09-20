"use strict";

var arrGroceries = [{
  title: 'potatoe',
  price: 10,
  amount: 7
}, {
  title: 'apple',
  price: 5
}, {
  title: 'carrots',
  price: 3
}, {
  title: 'bananas',
  price: 4
}];

function displayGroceries(product) {
  var div = document.createElement('div'); //div.textContent = arrGroceries[0].title

  div.classList.add('list');
  console.log(div);
  var container = document.querySelector('.groceries');
  var price = document.createElement('p');
  price.textContent = product.price;
  var title = document.createElement('p');
  title.textContent = product.title;
  div.appendChild(price);
  div.appendChild(title);
  container.appendChild(div);
}

function displayHeading() {
  var div = document.createElement('div');
  div.classList.add('heading');
  Object.keys(arrGroceries[0]).forEach(function (element) {
    var title = document.createElement('p');
    title.textContent = element;
    div.appendChild(title);
  });
  var container = document.querySelector('.heading_wrapper');
  container.appendChild(div);
}

displayHeading(); //displayGroceries(arrGroceries[2])

arrGroceries.forEach(function (element) {
  displayGroceries(element);
});