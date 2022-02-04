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

function cartItemClickListener(event) {
  // coloque seu código aqui
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  const ol = document.querySelector('.cart__items');
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

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

const sectionItem = () => {
  fetchProducts('computador').then((objeto) => 
    objeto.results.forEach(({ id, title, thumbnail }) => {
        sectionItems
          .appendChild(createProductItemElement({ sku: id, name: title, image: thumbnail }));
    }));
};

window.onload = () => {
  sectionItem();
 };
