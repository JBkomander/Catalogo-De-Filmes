// Listas de palavras

const palavras = ['teste 1','teste 2','....'];

//objeto
const filme = {
    titulo:'Filme 1',
    genero:'Ação',
    avaliacao:2025,
    ano:7
};

console.log(filme.titulo);
console.log(palavras[1], palavras.length);

const filmes = [
   
        { titulo: 'Interestelar', genero: 'Ficção Científica', ano: 2014, nota: 9.2 },
        { titulo: 'Shrek', genero: 'Animação', ano: 2001, nota: 8.4 },
        { titulo: 'Corra!', genero: 'Terror', ano: 2017, nota: 8.7 },
        { titulo: 'Oppenheimer', genero: 'Drama', ano: 2023, nota: 8.9 },
        { titulo: 'Homem-Aranha no Aranhaverso', genero: 'Animação', ano: 2018, nota: 9.0 },
        { titulo: 'Duna: Parte Dois', genero: 'Ficção Científica', ano: 2024, nota: 8.8 },
        { titulo: 'Parasita', genero: 'Drama', ano: 2019, nota: 9.1 },
        { titulo: 'Um Lugar Silencioso', genero: 'Terror', ano: 2018, nota: 8.3 }
    ];


//console.log(filmes[2].titulo)

//fução generica para exibir os filmes a partir de uma lista fornecida

function exibirFilmes(listaFilmes){

    let areaFilmes = document.querySelector('#lista-filmes');
    let mensagem = document.querySelector('#mensagem-listagem');

    if(listaFilmes.length === 0){
        mensagem.textContent = 'Nunhum filme encontrado.';
        mensagem.classList.remove('d-none');
        return;
    }

    // Listagem dos filmes
    for(let i = 0; i < listaFilmes.length; i++){
        const filme = listaFilmes[i];

        // console.log(filme);
        // console.log(filme.titulo);

        let coluna = document.createElement('div');
        coluna.className = 'col-md-6 col-lg-4';

        let card = document.createElement('div');
        card.className = 'card movie-card';

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let titulo = document.createElement('h3');
        titulo.textContent = filme.titulo;

        let genero = document.createElement('span');
        genero.className = 'badge text-bg-secondary mb-3';
        genero.textContent = filme.genero;

        let ano = document.createElement('p');
        ano.className = 'card-text mb-1';
        ano.textContent = `Ano: ${filme.ano}`;

        let avaliacao = document.createElement('p');
        avaliacao.className = 'card-text mb-1';
        avaliacao.textContent = `Avaliação: ${filme.nota.toFixed(1)}`;
        
        cardBody.appendChild(titulo);
        cardBody.appendChild(genero);
        cardBody.appendChild(ano);
        cardBody.appendChild(avaliacao);
        card.appendChild(cardBody);
        coluna.appendChild(card);

        areaFilmes.appendChild(coluna);

    }

}
//função de atalho para listar todos os filmes

function listarTodos(){
    exibirFilmes(filmes);
}

function atualizarResumo(){
     let divtotal = document.querySelector('#quantidade-filmes');
     let divmedia = document.querySelector('#media-avaliacoes');
     let divGeneros = document.querySelector('#contagem-generos');

     divtotal.textContent = filmes.length;

     let somaNotas = 0;

     let qtdePorGenero = {
             animacao: 0,
             drama: 0,
             ficcaoCientifica: 0,
             terror: 0
     }

   for(let i = 0; i < filmes.length; i++){
       somaNotas += filmes[i].nota;
   
        if(filmes[i].genero == 'Animação'){
            qtdePorGenero.animacao++;

        }

        if(filmes[i].genero == 'Drama'){
            qtdePorGenero.drama++;


        }

        if(filmes[i].genero == 'Ficção Cientifica '){
            qtdePorGenero.ficcaoCientifica++;

        }

        if(filmes[i].genero == 'Terror'){
            qtdePorGenero.terror++;

        }

   }

   console.log(somaNotas);
    let media = filmes.length > 0 ? somaNotas / filmes.length :0;

    divMedia.textContent = media = mediatoFixed(1);

    let badgeAnimacao = document.createElement('span');
    badgeAnimacao.className = 'badge text-bg-primary';
    badgeAnimacao.textContent = `Animação: $
    {qtdePorGenero.animacao}`;

    let badgedrama = document.createElement('span');
    badgeAnimacao.className = 'badge text-bg-success';
    badgeAnimacao.textContent = `drama: $
    {qtdePorGenero.drama}`;

    divGeneros.appendChild(badgeAnimacao);

   console.log(somaNotas);
   let media = filmes.length > 0 ? somaNotas / filmes.length:0;

   divmedia.textContent = media.toFixed(1);
 


}
//chama a funcao para listar todos os filmes no carregamento da pagina

listarTodos();


//Atualiza os dados  resumo no carregamento da pagina
atualizarResumo();