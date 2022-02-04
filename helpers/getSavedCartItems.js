const getSavedCartItems = () => {
  const ol = document.querySelector('.cart__items');
  const saveItems = localStorage.getItem('cartItems');
  ol.innerHTML = saveItems;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
