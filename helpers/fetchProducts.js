const fetchProducts = async (item) => { // linha de código fornecida pela escola Trybe
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

if (typeof module !== 'undefined') { // linha de código fornecida pela escola Trybe
  module.exports = { // linha de código fornecida pela escola Trybe
    fetchProducts, // linha de código fornecida pela escola Trybe
  }; // linha de código fornecida pela escola Trybe
}
