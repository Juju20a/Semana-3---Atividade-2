const tamanho = prompt('Digite o tamanho da lista de números'); 
const lista = new Array(tamanho).fill(null); //Cria um novo array e filtra os elementos substituindo por null
lista
.map(function (item, index) { // cria um novo array do mesmo tamando do array original, no caso o array lista
    return index + 1; //retorna o index + 1
})
.reduce(function (acumulador, item) { // intera sobre cada item dos elementos criando um novo array reduzido 
   return acumulador * item; //Retorna a multiplicação de acumulador e item
 });

new Array(tamanho)
 .fill(null) //Substitui os valores dos elementos por null
 .map((item, index) => index + 1) //Cria uma nova lista com o mesmo tamanho da orginal, começando de 1 até tamanho
 .reduce((acumulador, item) => acumulador + item); //Soma todos os números gerados