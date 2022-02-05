const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  it('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {
    const test = getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  })
  it('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o cartItems como parâmetro.', () => {
    const test2 = getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  })
});
