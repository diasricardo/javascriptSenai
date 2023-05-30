var listaFilmes= []

listaFilmes = JSON.parse(localStorage.getItem('bdFilmes', listaFilmes))
if(listaFilmes == null)
{
    listaFilmes = []
}
function botaoFilmes() {
    var nome = document.getElementById("nome").value
    var imagem = document.getElementById("imagem").value  
    document.getElementById('resultado').innerHTML = ''

    var filme = {
        nome: nome,
        imagem: imagem
    }

    listaFilmes.push(filme)
    localStorage.setItem('bdFilmes', JSON.stringify(listaFilmes))

    for (var i in listaFilmes) {
    //for (var i = 0; i < filmes.length ; i++) {
        document.getElementById('resultado').innerHTML +=
            `<div><img src='${listaFilmes[i].imagem}' class='img'> <p>${listaFilmes[i].nome}<p><div>`
    }
    document.getElementById("nome").value = ''
    document.getElementById("imagem").value = ''
    document.getElementById("nome").focus()
}

function botaoIndicado(){
    var nrSorteado = parseInt(Math.random() * listaFilmes.length)
    document.getElementById('indicado').innerHTML = 
        `<div>
            <img src='${listaFilmes[nrSorteado].nome}' class='img'> 
            <p>${listaFilmes[nrSorteado].imagem}<p>
        </div>`
}

function limparVetor()
{
    listaFilmes = []
    localStorage.setItem('bdFilmes', JSON.stringify(listaFilmes))
    exibirLista()
}