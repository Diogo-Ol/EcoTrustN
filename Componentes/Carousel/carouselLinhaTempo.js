export class CarouselTempo {
    constructor(anteriorTempo, proximoTempo, listaProdutosTempo, navegacaoTempo) {
        this.anteriorTempo = document.querySelector(anteriorTempo)
        this.proximoTempo = document.querySelector(proximoTempo)
        this.listaProdutosTempo = document.querySelector(listaProdutosTempo)
        this.navegacaoTempo = document.querySelector(navegacaoTempo)

        this.indicadoresOpiniao = this.getListaIndicadores()

        this.slides = this.getListaSlides()
        this.tamanhoSlide = this.getTamanhoSlide()

        this.indiceDoSlideAtual = 0

        this.proximoTempo.addEventListener('click', this.proximoSlide.bind(this))

        this.anteriorTempo.addEventListener('click', this.slideAnterior.bind(this))

        this.preparaSlides()
    }

    getListaSlides() {
        return Array.from(this.listaProdutosTempo.children)
    }
    getListaIndicadores() {
        return Array.from(this.navegacaoTempo.children)
    }
    getTamanhoSlide() {
        return this.slides[0].getBoundingClientRect().width
    }

    getSlideAtual() {
        return this.slides[this.indiceDoSlideAtual]
    }
    getIndiceAtual() {
        return this.indicadoresOpiniao[this.indiceDoSlideAtual]
    }

    proximoSlide() {
        let proximaPosicao = this.indiceDoSlideAtual + 1
        if (proximaPosicao > this.slides.length - 1) {
            proximaPosicao = 0
        }

        this.vaParaSlide(proximaPosicao)
    }

    slideAnterior() {
        let posicaoAnterior = this.indiceDoSlideAtual - 1
        if (posicaoAnterior < 0) {
            posicaoAnterior = this.slides.length - 1
        }

        this.vaParaSlide(posicaoAnterior)
    }

    vaParaSlide(posicao) {
        const indicadorAtual = this.getIndiceAtual()
        this.indiceDoSlideAtual = posicao
        const indicadorSelecionado = this.getIndiceAtual()

        this.scrollParaSlide(this.getSlideAtual())
        this.atualizaIndicadores(indicadorAtual, indicadorSelecionado)
    }

    scrollParaSlide(slideSelecionado) {
        this.listaProdutosTempo.style.transform = 'translateX(-' + slideSelecionado.style.left + ')'

    }

    atualizaIndicadores(indicadorAtual, indicadorSelecionado){

    indicadorAtual.classList.remove('carousel__indicador--ativo--tempo')

    indicadorSelecionado.classList.add('carousel__indicador--ativo--tempo')
    }

    preparaSlides() {
        this.slides.forEach((slide, i) => {
            slide.style.left = this.tamanhoSlide * i + 'px'
        })
    }
}