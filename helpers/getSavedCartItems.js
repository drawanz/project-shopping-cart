const getSavedCartItems = () => { // linha de código fornecida pela escola Trybe
  const cart = document.querySelector('ol');
  const saveItems = localStorage.getItem('cartItems');
  cart.innerHTML = saveItems;
};

if (typeof module !== 'undefined') { // linha de código fornecida pela escola Trybe
  module.exports = getSavedCartItems; // linha de código fornecida pela escola Trybe
} // linha de código fornecida pela escola Trybe
