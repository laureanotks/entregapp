let respostasA = 0;
let respostasB = 0;
let respostasC = 0;
let respostasD = 0;
let respostasE = 0;

let questions = {
    1: {
        question: "Sou introvertido.",
        a: "Concordo",
        b: "Não concordo",
        c: "ambas as respostas estāo corretas",
        d: "ambas as respostas estão incorretas",
    },
    2: {
        question: "Qual dos dois filmes se refere a 'Jornada nas Estrelas'?",
        a: "Star Trek",
        b: "Star Wars",
        c: "ambas as respostas estāo corretas",
        d: "ambas as respostas estão incorretas",
    }
}

//listar objeto de perguntas e opções de respostas
questions.forEach(element => {
    console.log(element); 
    questions.element[1];

    //recupera espaço criado para exibir no html
    let divNoIndex = document.getElementById('questions');

    //pegar pergunta para exibir no html
    divNoIndex.innerHTML = element;

    // pegar resposta da pegunta exibida atraves da funçao onclick

    //pegar o value do input e comparar a resposta, caso o value seja igual a 'A'

    // acrescanetar na variavel corresponde (respostasA)
    respostasA++;
    // armazenar resposta em uma variavel globlal

});


//função para verificar variavel mais respostas

document.getElementById('questions').innerHTML

