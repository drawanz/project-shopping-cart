const getSavedCartItems = () => {
  const saveItems = localStorage.getItem('cartItems');
  const ol = document.querySelector('.cart__items');
  if (ol !== null) {
    ol.innerHTML = saveItems;
  }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
