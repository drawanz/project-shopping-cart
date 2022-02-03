const fetchProducts = async (item) => {
  try {
    if (item.length > 0) {
      const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
      const response = await fetch(url);
      const objeto = await response.json();
      return objeto;
    }
  } catch (error) {
    throw new Error('You must provide an url.');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
