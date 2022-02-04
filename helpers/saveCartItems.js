const saveCartItems = () => {
  const ol = document.querySelector('.cart__items');
  const olHtml = ol.innerHTML;
  localStorage.setItem('cartItems', olHtml);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
