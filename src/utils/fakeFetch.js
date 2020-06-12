/**
 * @description Para finalidade de testes, esse possibilita a imitação de uma requisição asincrona ao back-end. Usada somente em desenvolvimento
 * @param {*} returnValue Valor que será retornado pela chamada desta função
 * @param {*} shouldReject Caso true a promise recebida como retorno desta função sera rejeitada
 * @param {*} time Tempo que a resposta deve demorar, caso não estipulado o valor padrão de 2 segundos será utilizada
 */
export function fakeFetch(returnValue, shouldReject = false, time = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) reject(new Error("Erro ao baixar os dados"));
      resolve(returnValue);
    }, time);
  });
}
