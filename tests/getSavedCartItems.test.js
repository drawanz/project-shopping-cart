const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem'); // linha de código fornecida pela escola Trybe

// No código do colega Brendom Lopes, da turma 19 C, observei que ele usou uma simulação do DOM para que
// sua função getSavedCartItems.test.js pudesse ser testada. Ao ver isso no código dele, abri a documentação a qual ele referenciou e optei, após ter lido o material, realizar uma simulação semelhante. Referência do documento: https://jestjs.io/pt-BR/docs/tutorial-jquery

document.body.innerHTML =
    '<div>' +
    '  <ol class="cart__items"></ol>' +
    '</div>';

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
