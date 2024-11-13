const estudantes = [
     { nome: 'Alice', notas: [100, 60, 92] },
     { nome: 'João', notas: [75, 30, 85] },
     { nome: 'Charles', notas: [90, 95, 85] },
     { nome: 'Paulo', notas: [100, 100, 100] },
    ];
    
    const estudantesMedias = estudantes.map((estudante) => {//Cria uma nova lista com as medias dos estudantes
     const total = estudante.notas.reduce((soma, nota) => soma + nota);// pega as notas dos estudantes e cria uma nova lista reduzida com a suma das notas
     let {nome} = estudante;
     return { nome, media: total / estudante.notas.length };// Retorna um objeto com nome dos alunos e suas medias e a quantidade de caracteres ( total das notas divididos pela quantidade de notas)
    
    });