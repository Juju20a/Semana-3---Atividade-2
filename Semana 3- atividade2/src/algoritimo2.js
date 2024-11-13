const letras = [
     ['a', 'b', 'c'],
     ['c', 'd', 'f'],
     ['d', 'f', 'g'],
    ];// Lista chamada letras
    
    let resultado = letras.flat().reduce((objeto, numero) => { //Cria uma nova matriz com todos os elementos da submatriz concatenados recursivamente até a profundidade especificada. 
        if (objeto[numero]) {
       objeto[numero] += 1; //Se a chave já existe, incrementa o valor (contagem)
     } else {
       objeto[numero] = 1;// Se não existe incrementa apartir de 1
     }
     return objeto; //Retorna objeto
    }, {});
