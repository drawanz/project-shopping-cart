const saveCartItems = (item) => {
  const ol = document.getElementsByTagName('ol');
  if (item) {
    localStorage.setItem('cartItems', item);
  }
    localStorage.setItem('cartItems', ol.innerHTML);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}