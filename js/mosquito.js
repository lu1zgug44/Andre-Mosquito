// criação de variáveis

let largura = 0
let altura = 0

function ajustarTela(){
    largura = window.innerWidth
    altura = window.innerHeight
    console.log(largura, altura)
}

ajustarTela()

function desenharMosquito(){
    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    document.body.appendChild(mosquito)
    mosquito.className = 'mosq01'
}

desenharMosquito()