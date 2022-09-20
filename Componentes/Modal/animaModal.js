function abrirModalAgendamento(){
    modalAgendamento.style.display = ` flex `;
    modalAgendamento.style.animation = ` animaModal .4s ease-in-out forwards `;
    containerModal.style.display = ` flex `;
    containerModal.style.animation = ` animaContainer .5s ease-in-out forwards `;
}
function fechaModalAgendamento(){
    modalAgendamento.style.display = ` none `;
    containerModal.style.display = ` none `;
    containerModal.style.animation = `animaFechaContainer .5s ease-in-out forwards `;
}
window.onclick = function(event) {
    if (event.target == modalAgendamento) {
        modalAgendamento.style.display = "none";
    }
  } 

const modalAgendamento = document.querySelector('.secao__modal__agenda');
const containerModal = document.querySelector('.container__modal__agenda');





const conteudoData = document.querySelector('#conteudo__agenda__data')
const conteudoHora = document.querySelector('#conteudo__agenda__hora')
const conteudoDados = document.querySelector('#conteudo__agenda__dados')
const conteudoConcluido = document.querySelector('#conteudo__agenda__concluido')



const fechaModal = document.querySelector('#botao__fecha__modal')
const voltaHora = document.querySelector('#botao__volta__data')
const voltaDados = document.querySelector('#botao__volta__horario')
const fechaConcluido = document.querySelector('#botao__fecha__modal__concluido')

function animaData(){
    conteudoData.style.display = ` none `
    conteudoHora.style.display = ` flex `

    fechaModal.style.display = ` none `
    voltaHora.style.display = ` flex ` 

    barraProgresso2.style.backgroundColor = ` #FF6F29 `
    
}

function animaHora(){
    conteudoHora.style.display = ` none `
    conteudoDados.style.display = ` flex `

    voltaHora.style.display = ` none `
    voltaDados.style.display = ` flex ` 

    barraProgresso3.style.backgroundColor = ` #FF6F29 `
}

function animaDados(){
    conteudoDados.style.display = ` none `
    conteudoConcluido.style.display = ` flex `

    voltaDados.style.display = ` none `
    fechaConcluido.style.display = ` flex ` 
}

function animaConcluido(){
    conteudoConcluido.style.display = ` none `
    conteudoData.style.display = ` flex `
    modalAgendamento.style.display = ` none `;
    containerModal.style.display = ` none `;

    fechaConcluido.style.display = ` none `
    fechaModal.style.display = ` flex ` 

    barraProgresso2.style.backgroundColor = ` #BFBFC0 `
    barraProgresso3.style.backgroundColor = ` #BFBFC0 `
}

const barraProgresso2 = document.querySelector('#barra__progresso-2')
const barraProgresso3 = document.querySelector('#barra__progresso-3')

function voltaAnimaData(){
    conteudoData.style.display = ` flex `
    conteudoHora.style.display = ` none `

    fechaModal.style.display = ` flex `
    voltaHora.style.display = ` none ` 

    barraProgresso2.style.backgroundColor = ` #BFBFC0 `

}

function voltaAnimaHora(){
    conteudoHora.style.display = ` flex `
    conteudoDados.style.display = ` none `

    voltaHora.style.display = ` flex `
    voltaDados.style.display = ` none ` 

    barraProgresso3.style.backgroundColor = ` #BFBFC0 `
}

function voltaAnimaDados(){
    conteudoDados.style.display = ` flex `
    conteudoConcluido.style.display = ` none `

    voltaDados.style.display = ` flex `
    fechaConcluido.style.display = ` none` 

    barraProgresso2.style.backgroundColor = ` #BFBFC0 `
    barraProgresso3.style.backgroundColor = ` #BFBFC0 `
}