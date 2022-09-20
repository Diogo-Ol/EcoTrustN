export class CarouselNoticias {
    constructor(anteriorNoticias, proximoNoticias, listaProdutosNoticias) {
        this.anteriorNoticias = document.querySelector(anteriorNoticias)
        this.proximoNoticias = document.querySelector(proximoNoticias)
        this.listaProdutosNoticias = document.querySelector(listaProdutosNoticias)

        this.slides = this.getListaSlides()
        this.tamanhoSlide = this.getTamanhoSlide()

        this.indiceDoSlideAtual = 0

        this.proximoNoticias.addEventListener('click', this.proximoSlide.bind(this))

        this.anteriorNoticias.addEventListener('click', this.slideAnterior.bind(this))

        this.preparaSlides()
    }

    getListaSlides() {
        return Array.from(this.listaProdutosNoticias.children)
    }

    getTamanhoSlide() {
        return this.slides[0].getBoundingClientRect().width - 12
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
        this.indiceDoSlideAtual = posicao

        this.scrollParaSlide(this.getSlideAtual())
    }

    scrollParaSlide(slideSelecionado) {
        this.listaProdutosNoticias.style.transform = 'translateX(-' + slideSelecionado.style.left + ')'

    }

    preparaSlides() {
        this.slides.forEach((slide, i) => {
            slide.style.left = this.tamanhoSlide * i + 'px'
        })
    }
}