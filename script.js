const sectionItems = document.querySelector('.items');
const ol = document.querySelector('.cart__items');
const emptyCart = document.querySelector('.empty-cart');

function getPriceCartItem() {
  const firstItem = document.querySelector('ol').children;
  let total = 0;
  for (let i = 0; i < firstItem.length; i += 1) {
    const text = firstItem[i].innerText.split('$')[1];
    total += parseFloat(text);
  }
  return total; // toFixed faz aparecer apenas 2 casas após a vírgula
}

function subTotalCartItems() {
  const subTotal = document.querySelector('#subtotal');
  const valueCartItems = getPriceCartItem();
  subTotal.innerHTML = `${valueCartItems}`;
}

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function cartItemClickListener(event) {
  event.target.remove();
  saveCartItems(ol.innerHTML);
  subTotalCartItems();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');

  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  ol.appendChild(li);
  return li;
}

const pegaId = (event) => {
  const ev = event.target.parentElement.firstChild.innerText;
  fetchItem(ev).then(({ id, title, price }) => {
    createCartItemElement({ sku: id, name: title, salePrice: price });
    saveCartItems(ol.innerHTML);
    subTotalCartItems();
  });
};

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  const newImage = image.split('-'); // o split separa minha string em um grupo de arrays pelo parametro que eu passar
  if (newImage[2].includes('I')) newImage[2] = 'J.jpg';
  const bestImage = `${newImage[0]}-${newImage[1]}-${newImage[2]}`;
  section.appendChild(createProductImageElement(bestImage));
  const btnAdd = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  btnAdd.addEventListener('click', pegaId);
  section.appendChild(btnAdd);

  return section;
}

function emptyingCart() {
  ol.innerHTML = '';
  subTotalCartItems();
  saveCartItems('');
}

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

function createLoadMessage() {
  const text = document.createElement('p');
  const trybeShopping = document.querySelector('.container-title');
  text.innerText = 'carregando...';
  text.style.fontSize = '200%';
  text.style.color = 'yellow';
  text.className = ('loading');
  const header = document.querySelector('.header');
  header.insertBefore(text, trybeShopping.nextSibling);
}

function removeLoadMessage() {
  const header = document.querySelector('.header');
  const text = document.querySelector('.loading');
  header.removeChild(text);
}

const sectionItem = async () => {
  const { results } = await fetchProducts('computador');
  results.forEach(({ id, title, thumbnail }) => {
    sectionItems
      .appendChild(createProductItemElement({ sku: id, name: title, image: thumbnail }));
  });
  removeLoadMessage();    
};

function addEventListerSavedItems() {
  const li = document.getElementsByClassName('cart__item');
  for (let i = 0; i < li.length; i += 1) {
    li[i].addEventListener('click', cartItemClickListener);
  }
}

emptyCart.addEventListener('click', emptyingCart);

window.onload = () => {
  createLoadMessage();
  sectionItem();
  getSavedCartItems();
  addEventListerSavedItems();
  subTotalCartItems();
 };
