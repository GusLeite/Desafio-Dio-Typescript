// Como podemos rodar isso em um arquivo .ts sem causar erros? 
/***DESAFIO***
let employee = {};
employee.code = 10;
employee.name = "John";
*/

//********RESOLUÇÃO**********//
const funcionario: {code: number, name: string} = {
    code: 10,
    name: 'John'
}
