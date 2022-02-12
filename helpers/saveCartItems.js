const saveCartItems = (items) => { // linha de código fornecida pela escola Trybe
  localStorage.setItem('cartItems', items);
};

if (typeof module !== 'undefined') { // linha de código fornecida pela escola Trybe
  module.exports = saveCartItems; // linha de código fornecida pela escola Trybe
} // linha de código fornecida pela escola Trybe