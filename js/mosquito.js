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
    let posX = parseInt(Math.random()*largura)-90
    let posY = parseInt(Math.random()*altura)-90
    posX = posX<0?0:posX
    posY = posY<0?0:posY
    console.log(posX, posY)
    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    document.body.appendChild(mosquito)
    mosquito.className = tamanhoMosquito() +' '+ giraGira()
    mosquito.style.left = posX + 'px'
    mosquito.style.top = posY + 'px'
    mosquito.style.position = 'absolute'
}

desenharMosquito()

function tamanhoMosquito(){
    let tamanho = parseInt(Math.random()*3)+1
    return 'mosq' + tamanho
}

function giraGira(){
    let girar = parseInt(Math.random()*2)
    switch(girar){
        case 0:
            return 'ladoA'
        break
        case 1:
            return 'ladoB'
            break
    }
}