//Chamando função para calcular o dobro e receber o resultado na variável
var resultado
resultado = calcularDobro(544075)  // Douglas
console.log (resultado)

//Declarando a função recebendo o parametro e retornando um valor
function calcularDobro(nr){  // Ricardo
    var dobro = nr * 2
    return dobro // com o comando return "devolve" o valor calculado para a chamada
}
//Calcular média enviando 2 parametros e retornando a média
function calcularMedia(nota1, nota2)
{
    var soma = nota1 + nota2
    var media = soma / 2
    return media
}

var aluno1 = calcularMedia(7, 8)
console.log(aluno1)
var aluno2 = calcularMedia(5,6)
console.log(aluno2)


var login = "adm"
var senha = 123

var possoAcessar = validarLogin(login, senha)
if (possoAcessar == true)
{
    console.log("Voce pode acessar o sistema")
}else 
{
    console.log("Voce não tem permissão")
}

function validarLogin(login, senha)
{
    //valida se os valores são vazios
    if(login == '' || senha == '')
    {
       return false
    }
    //valida se login e senha são iguais
    if (login == "adm" && senha == 123)
    {
        return true
    }
    else
    {
        return false
    }
}