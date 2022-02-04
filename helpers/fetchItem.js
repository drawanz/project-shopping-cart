const fetchItem = async (item) => {
  // seu código aqui
  try {
    if (item.length > 0) {
  const url = `https://api.mercadolibre.com/items/${item}`;
  const response = await fetch(url);
  const obj = await response.json();
  return obj;
    }
  } catch (error) {
    throw new Error('You must provide an url.');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
