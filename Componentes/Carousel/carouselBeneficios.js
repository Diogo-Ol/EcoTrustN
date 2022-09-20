export class CarouselBeneficios {
    constructor(anteriorBeneficios, proximoBeneficios, listaProdutosBeneficios) {
        this.anteriorBeneficios = document.querySelector(anteriorBeneficios)
        this.proximoBeneficios = document.querySelector(proximoBeneficios)
        this.listaProdutosBeneficios = document.querySelector(listaProdutosBeneficios)

        this.slides = this.getListaSlides()
        this.tamanhoSlide = this.getTamanhoSlide()

        this.indiceDoSlideAtual = 0

        this.proximoBeneficios.addEventListener('click', this.proximoSlide.bind(this))

        this.anteriorBeneficios.addEventListener('click', this.slideAnterior.bind(this))

        this.preparaSlides()
    }

    getListaSlides() {
        return Array.from(this.listaProdutosBeneficios.children)
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
        this.indiceDoSlideAtual = posicao

        this.scrollParaSlide(this.getSlideAtual())
    }

    scrollParaSlide(slideSelecionado) {
        this.listaProdutosBeneficios.style.transform = 'translateX(-' + slideSelecionado.style.left + ')'

    }

    preparaSlides() {
        this.slides.forEach((slide, i) => {
            slide.style.left = this.tamanhoSlide * i + 'px'
        })
    }
}