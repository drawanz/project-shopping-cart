const fetchProducts = async (item) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=$${item}`;
  const response = await fetch(url);
  const { results } = await response.json();
  // console.log(obj);
  return results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
