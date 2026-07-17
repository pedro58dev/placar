let esquerda = 0
let direita = 0
let seg = 0
let timerRodando = false

setInterval(() => {
    if(timerRodando == true){
        
        seg++
    }
    console.log(seg);
    document.getElementById('cronometro').innerHTML = seg
},1000)

function acionarCronometro(){
    timerRodando = !timerRodando
    if(timerRodando == true){
        document.getElementById('bt-play').innerText= 'pause'
    }else{
        document.getElementById('bt-play').innerText= 'play'

    }
}

function incrementarEsquerda(){
    esquerda++
    // alert(esquerda)
    document.getElementById('valor-esq').innerHTML = esquerda
}
function decrementarEsquerda(){
    esquerda--
    document.getElementById('valor-esq').innerHTML = esquerda
}

function incrementarDireita(){
    direita++
    // alert(esquerda)
    document.getElementById('valor-dir').innerHTML = direita
}
function decrementarDireita(){
    direita--
    document.getElementById('valor-dir').innerHTML = direita
}
function resetar(){
    esquerda = 0
    direita = 0
    document.getElementById('valor-dir').innerHTML = direita
    document.getElementById('valor-esq').innerHTML = esquerda
    seg = 0
    document.getElementById('cronometro').innerHTML = seg
}
