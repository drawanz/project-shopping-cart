const saveCartItems = (item) => {
  if (item === undefined) {
    const ol = document.querySelector('.cart__items');
    const olHtml = ol.innerHTML;
    localStorage.setItem('cartItems', olHtml);
  } else {
    localStorage.setItem('cartItems', item);
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
