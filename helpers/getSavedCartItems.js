const getSavedCartItems = () => {
  const cart = document.querySelector('ol');
  const saveItems = localStorage.getItem('cartItems');
  cart.innerHTML = saveItems;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
