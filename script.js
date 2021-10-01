// defindo arrays que irão conter as urls e nomes
var listaImagem = ["https://m.media-amazon.com/images/I/91WY2zIvzzL._AC_SY550_.jpg", "https://br.web.img3.acsta.net/pictures/14/05/27/15/43/549754.jpg", "https://image.tmdb.org/t/p/w342/cL1nr253DD3668Na0cxfe9B6QRM.jpg","https://br.web.img2.acsta.net/pictures/15/02/10/12/43/454047.jpg","https://br.web.img2.acsta.net/medias/nmedia/18/87/36/43/19874732.jpg","https://upload.wikimedia.org/wikipedia/pt/c/cc/Poster_O_Homem_do_Futuro.jpg","https://br.web.img3.acsta.net/pictures/18/02/22/15/25/2917796.jpg","https://upload.wikimedia.org/wikipedia/pt/6/66/O-Livro-de-Eli-poster.jpg"]
var listaNome = ["Senhor Ninguem", "No limite do amanhã", "Aprendiz de feiticeiro","Chappie","O preço do amanhã","O homem do futuro","Aniquilação","O livro de Eli"]

var select = document.querySelector("#select")//variavel do <select> do HTML
var filmes = document.querySelector(".filmes")//variavel da div .filmes no HTML

// definindo uma função para os codigos que são responsaveis por atualizar as imagems, nomes e nomes dentro do <select> na tela
function AdicionarNovoFilme() {
    //codigos responsaveis por esvaziar a array com os filmes anteriores antes de imprimir os novos, sem eles, eram adicionados todos as imagens e nomes toda vez que era chamado essa função
    filmes.innerHTML = null
    select.innerHTML = null
    //laço que imprime no HTML todas as informações contidas nas arrays
    for (var i = 0; i < listaImagem.length; i++) {
        // responsavel por adicionar a url e nome no HTML, os dois dentro de uma unica div
        filmes.insertAdjacentHTML("beforeend", "<div class='filmes-div'> <img src=" + listaImagem[i] + " class=image-list>" + "<p class=name-list>" + listaNome[i] + "</p></div> ")
        //responvael por adicionar o nome do filme como uma opção para ser selecionada quando vai excluir
        select.insertAdjacentHTML("beforeend", " <option value=" + i + ">" + listaNome[i] + "</option>")
    }


}

AdicionarNovoFilme()//chamando a função que foi criada anteriormente

//defindo os codigos que irão ser executados quando apertar no botão Adicionar()
function Enviar() {
    //variaveis responsaveis por armazenar as urls e nomes inseridos nos inputs
    var adicionarUrl = document.querySelector("#entradaImagem").value
    var adicionarNome = document.querySelector("#entradaNome").value

    //primeira condição verifica se já há alguma url ou nome identica nas arrays, se não tiver ele executa outra condição
    if (listaImagem.includes(adicionarUrl) || listaNome.includes(adicionarNome)) {
        alert("Imagem ou nome do filme já adicionada")
    } else {
        //condição que verifica se o formato de imagem da url é valido, se for ele é adicionado nas arrays
        if (adicionarUrl.endsWith(".jpg") || adicionarUrl.endsWith(".png")) {
            //codigos responsaveis por adicionar as novas urls e nomes nas arrays criadas no inicio
            listaImagem.push(adicionarUrl)
            listaNome.push(adicionarNome)

            // chamando a função responsavel por atualizar as informações na tela
            AdicionarNovoFilme()
        }
        else if (adicionarUrl.endsWith(".jpg") == false || adicionarUrl.endsWith(".png") == false) {
            alert("Por Favor use a url de uma imagem .JPG ou .PNG")
        }
    }

    // defindo as variaveis dos inputs como um valor nulo para que as informações colocadas neles sumam quando apertar o botão Adicionar
    adicionarUrl = document.querySelector("#entradaImagem").value = ""
    adicionarNome = document.querySelector("#entradaNome").value = ""
}

//definindo os codigos responsaveis por remover um filme quando apertar o botão Remover()
function Remover() {
    //variavel  que armazena o id do filme escolhido no <select>
    var testeSelect = document.querySelector("#select").value
    //splice remove informações dentro das arrays das url e nome, o primeiro numero dentro dos () define apartir de qual indice um elemento dentro da array é selecionado, o segundo numero diz quantos elementos vão ser excluidos, no caso 1 filme e 1 nome escolhido no <select>
    listaImagem.splice(testeSelect, 1)
    listaNome.splice(testeSelect, 1)
    //chama a função para atualizar as informações na tela, para que o filme removido da array também suma da tela
    AdicionarNovoFilme()
}
