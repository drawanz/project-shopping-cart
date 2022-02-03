const sectionItems = document.querySelector('.items');

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

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  const newImage = image.split('-'); // o split separa minha string em um grupo de arrays pelo parametro que eu passar
  if (newImage[2].includes('I')) newImage[2] = 'J.jpg';
  const bestImage = `${newImage[0]}-${newImage[1]}-${newImage[2]}`;
  console.log(bestImage);
  section.appendChild(createProductImageElement(bestImage));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // coloque seu código aqui
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const sectionItem = () => {
  const obj = {};
  fetchProducts('computador').then((objeto) => 
    objeto.results.forEach(({ id, title, thumbnail }) => {
        obj.sku = id;
        obj.name = title;
        obj.image = thumbnail;
        sectionItems.appendChild(createProductItemElement(obj));
    }));
};
window.onload = () => {
  sectionItem();
 };
