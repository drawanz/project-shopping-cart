const getSavedCartItems = () => {
  const saveItems = localStorage.getItem('cartItems');
    const ol = document.getElementsByTagName('ol');
    ol.innerHTML = saveItems;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
