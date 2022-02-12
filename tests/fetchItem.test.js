require('../mocks/fetchSimulator'); // linha de código fornecida pela escola Trybe
const { fetchItem } = require('../helpers/fetchItem'); // linha de código fornecida pela escola Trybe
const item = require('../mocks/item'); // linha de código fornecida pela escola Trybe

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui
  it('Teste se a função fetchItem é uma função', () => {
    expect(typeof fetchItem === 'function').toBe(true);
  });
  it('Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada', async () => {
    const test = await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });
  it('Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
    const test2 = await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith("https://api.mercadolibre.com/items/MLB1615760527");
  });
  it('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
    const test3 = await fetchItem('MLB1615760527');
    expect(test3).toEqual(item);
  });
  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    expect.assertions(1);
    try{
      const test4 = await fetchItem();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url.'));
    }
  })
});
