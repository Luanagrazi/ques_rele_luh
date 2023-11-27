/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "Qual o nome da forma de relevo caracterizada pelo topo plano e pelas laterais íngremes e escarpadas?",
    alternativaA : "Falésia",
    alternativaB : "Duna",
    alternativaC : "Planalto",
    alternativaD : "Montanha",
    correta      : "Planalto",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Assinale a alternativa que apresenta um agente exógeno do relevo:",
    alternativaA : "Vento",
    alternativaB : "Tectonismo",
    alternativaC : "Vulcanismo",
    alternativaD : "Solo",
    correta      : "Vento",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Qual das alternativas abaixo apresenta a melhor definição de relevo?",
    alternativaA : "É a paisagem formada somente por aspectos naturais do mundo.",
    alternativaB : "É a unidade espacial delimitada por uma bacia hidrográfica.",
    alternativaC : "É a soma de todas as formas físicas presentes no planeta Terra.",
    alternativaD : "É o conjunto de feições geomorfológicas presentes na litosfera.",
    correta      : "É o conjunto de feições geomorfológicas presentes na litosfera.",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual processo geológico é responsável pela formação de cavernas?",
    alternativaA : "Tectônica de placas.",
    alternativaB : "Erosão fluvial.",
    alternativaC : "Dissolução química.",
    alternativaD : "Sedimentação. ",
    correta      : "Dissolução química.",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual é o nome dado à elevação natural da superfície terrestre que é mais alta do que uma colina, mas menor do que uma montanha?",
    alternativaA : "Platô.",
    alternativaB : "Planalto. ",
    alternativaC : "Cordilheira. ",
    alternativaD : "Serra.",
    correta      : "Platô.",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "O que é um vale fluvial?",
    alternativaA : "Uma planície aluvial.",
    alternativaB : "Uma área de terreno elevada e plana.",
    alternativaC : "Uma depressão causada por erosão e deslizamentos de terra. ",
    alternativaD : "Uma área de montanhas íngremes.",
    correta      : "Uma depressão causada por erosão e deslizamentos de terra. ",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "As montanhas são consideradas as maiores feições em altitude da superfície terrestre. Elas são especificamente formadas pela(o)",
    alternativaA : "influência do clima nos aspectos pedológicos.",
    alternativaB : "processo de soerguimento da crosta terrestre.",
    alternativaC : "atuação da água no esculpimento do relevo.",
    alternativaD : "presença de vegetação na litosfera planetária.",
    correta      : "processo de soerguimento da crosta terrestre.",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "(UFT) Esta formação compõe a estrutura geomorfológica brasileira. É formada pelo solapamento da base do relevo, originando paredões litorâneos escarpados, que apresentam um desnivelamento abrupto.",
    alternativaA : "restingas litorâneas.",
    alternativaB : "deltas litorâneos.",
    alternativaC : " abrasão marinha.",
    alternativaD : "falésias.",
    correta      : "falésias.",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "(UFRR 2017) As formas de relevo de baixas altitudes, como as planícies, também estão presentes na paisagem amazônica. Sobre as planícies fluviais existentes na Amazônia, pode-se destacar CORRETAMENTE que:",
    alternativaA : "possuem superfícies irregulares e os mais longos processos de formação geológica da região.",
    alternativaB : "abrangem uma estreita faixa de terras planas que acompanham, principalmente, o rio Amazonas, com altitude inferior a 100 metros.",
    alternativaC : "caracterizam-se por terem uma superfície inclinada, com altitude de 500 metros a 800 metros.",
    alternativaD : "dominam completamente a região devido à presença de fortes abalos sísmicos no interior da Amazônia brasileira.",
    correta      : "abrangem uma estreita faixa de terras planas que acompanham, principalmente, o rio Amazonas, com altitude inferior a 100 metros.",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "O relevo brasileiro formou-se a partir de estruturas geológicas compostas, principalmente, por formações ___ recentes e estruturas ___ de idade muito antiga. Seu processo de formação e transformação foi muito influenciado por fatores ___, ou seja, pelos agentes formadores e modeladores do relevo que atuam na superfície do planeta Terra. Preencha a lacuna",
    alternativaA : "sedimentares – cristalinas – exógenos",
    alternativaB : "cristalinas – sedimentares – exógenos",
    alternativaC : "basálticas – sedimentares – exógenos",
    alternativaD : "sedimentares – cristalinas – endógenos",
    correta      : "basálticas – sedimentares – exógenos",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}
