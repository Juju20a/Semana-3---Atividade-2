const funcionarios = [ //Cria um array de objetos chamado funcionarios 
{ nome: 'João', salario: 30000, departamento: 'TI' },
{ nome: 'Janete', salario: 70000, departamento: 'RH' },
{ nome: 'Sofia', salario: 100000, departamento: 'RH' },
];
const funcionariosPorDepartamento = funcionarios.reduce(
(acumulador, funcionario) => {//Cria uma nova lista reduzida com os valores do acumulador e funcionario
    const departamento = funcionario.departamento;
    if (!acumulador[departamento]) {//Se o departamneto ainda não existe no acumulador, cria uma chave para ele

    acumulador[departamento] = [];// Inicia o array para depatarmento
    }
   acumulador[departamento].push(funcionario);// Adiciona o funcionário ao array do departamento correspondente

   return acumulador;// Retorna o acumulador atualizado para proxíma interação
 },
 {}, //Valor inicial do acumuldor inicial é um objeto vazio
);
const mediasSalarioPorDepartamento = Object.keys(
 funcionariosPorDepartamento,
).map((departamento) => {
 const total = funcionariosPorDepartamento[departamento].reduce(
   (acumulador, funcionario) => acumulador + funcionario.salario,
   0,
 );
 return {
   departamento: departamento,
   media: total / funcionariosPorDepartamento[departamento].length,
 };
});

const maioresPagamentos = mediasSalarioPorDepartamento.filter(
 (departamento) => departamento.media > 65000, //Filtra a média salarial maior que 65000