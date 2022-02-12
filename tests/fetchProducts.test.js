require('../mocks/fetchSimulator'); // linha de código fornecida pela escola Trybe
const { fetchProducts } = require('../helpers/fetchProducts'); // linha de código fornecida pela escola Trybe
const computadorSearch = require('../mocks/search'); // linha de código fornecida pela escola Trybe

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  it('Teste se a função fetch é uma função', () => {
    expect(typeof fetchProducts === 'function').toBe(true);
  })
  it('Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
  it('Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith("https://api.mercadolibre.com/sites/MLB/search?q=computador");
  })
  it('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    const teste = await fetchProducts('computador');
    expect(teste).toEqual(computadorSearch);
  })
  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    expect.assertions(1);
    try {
      await fetchProducts();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url.'));
    }
  })
  
});
