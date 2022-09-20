import { CarouselDepoimentos } from "./carouselDepoimentos.js"

const anteriorDepoimentos = '[data-anterior-depoimentos]'
const proximoDepoimentos = '[data-proximo-depoimentos]'
const listaProdutosDepoimentos = '[data-lista-depoimentos]'
const navegacaoDepoimentos = '[data-navegacao-depoimentos]'

new CarouselDepoimentos(anteriorDepoimentos, proximoDepoimentos, listaProdutosDepoimentos,navegacaoDepoimentos)

import { CarouselTempo } from "./carouselLinhaTempo.js"

const anteriorTempo = '[data-anterior-tempo]'
const proximoTempo = '[data-proximo-tempo]'
const listaProdutosTempo = '[data-lista-tempo]'
const navegacaoTempo = '[data-navegacao-tempo]'

new CarouselTempo(anteriorTempo, proximoTempo, listaProdutosTempo,navegacaoTempo)

import { CarouselNoticias } from "./carouselNoticias.js"

const anteriorNoticias = '[data-anterior-noticias]'
const proximoNoticias = '[data-proximo-noticias]'
const listaProdutosNoticias = '[data-lista-noticias]'

new CarouselNoticias(anteriorNoticias, proximoNoticias, listaProdutosNoticias)

import { CarouselBeneficios } from "./carouselBeneficios.js"

const anteriorBeneficios = '[data-anterior-beneficios]'
const proximoBeneficios = '[data-proximo-beneficios]'
const listaProdutosBeneficios = '[data-lista-beneficios]'

new CarouselBeneficios(anteriorBeneficios, proximoBeneficios, listaProdutosBeneficios)