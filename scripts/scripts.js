const carrinho = document.querySelector('.carrinho')
const btn_ver_carrinho = document.querySelector('.ver_carrinho')
const btn_finalizar_pedido = document.querySelector('.finalizar-pedido')
const mostrador = document.querySelector('.mostrador')
const total_carrinho = document.querySelector('.total')

// buttons adicionar ao carrinho.
const btn_shedar = document.querySelector('.x-shedar')
const btn_tudo = document.querySelector('.x-tudo')
const btn_salada = document.querySelector('.x-salada')
const btn_completao = document.querySelector('.x-completao')
const btn_burguer = document.querySelector('.x-burguer')
const btn_pesadao = document.querySelector('.x-pesadao')

// refris
const btn_coca = document.querySelector('.coca')
const btn_guarana = document.querySelector('.guarana')
const btn_fanta = document.querySelector('.fanta')

function atualizar_mostrador() {
    let cont = 0
    const itens = carrinho.querySelectorAll('.item-carrinho')
    itens.forEach(item => {
        const quantidadeTexto = item.querySelector('.quantidade').textContent
        const quantidade = parseInt(quantidadeTexto.replace('quantidade: ', ''))
        cont += parseInt(quantidade)
    })
    mostrador.innerHTML = '( ' + cont + ' )'
}

function calcular_total_carrinho() {
    const itens = carrinho.querySelectorAll('.item-carrinho')
    let total = 0

    itens.forEach(item => {
        const precoTexto = item.querySelector('.campo-item').childNodes[0].textContent.trim()
        const preco = parseFloat(precoTexto.replace('R$', '').replace(',', '.'))

        const quantidadeTexto = item.querySelector('.quantidade').textContent
        const quantidade = parseInt(quantidadeTexto.replace('quantidade: ', ''))

        total += preco * quantidade
    })
    total_carrinho.innerHTML = `Total: R$ ${total.toFixed(2)}`
}


function add_element_to_cart(name, preco, quantidade) {
    const itens = carrinho.querySelectorAll('.item-carrinho')
    let itemExistente = null
    itens.forEach(item => {
        const nome = item.querySelector('.nome').textContent.trim()
        if (nome === name) {
            itemExistente = item
        }
    })
    if (itemExistente) {
        const spanQuantidade = itemExistente.querySelector('.quantidade')
        let qtdAtual = parseInt(spanQuantidade.textContent.replace('quantidade: ', ''))
        spanQuantidade.textContent = `quantidade: ${qtdAtual + quantidade}`
    } else {
        const new_element = document.createElement('div')
        new_element.innerHTML = `
            <span class="nome">${name}</span><br/>
            <div class="campo-item">
                R$ ${preco.toFixed(2)}
                <span class="quantidade">quantidade: ${quantidade}</span>
            </div>`
        new_element.classList.add('item-carrinho')
        carrinho.appendChild(new_element)
    }
    alert(`${name} adicionado ao carrinho com sucesso!`)
    atualizar_mostrador()
    calcular_total_carrinho()
}


btn_finalizar_pedido.addEventListener("click", (event) => {
    const items = carrinho.querySelectorAll('.item-carrinho')
    items.forEach(item => item.remove())
    alert('Pedido finalizado com sucesso!')
    carrinho.classList.remove('aberto')
    mostrador.innerHTML = '( ' + 0 + ' )'
    total_carrinho.innerHTML = 'Total: R$ 0,00'
})

btn_ver_carrinho.addEventListener("click", (event) => {
    carrinho.classList.toggle('aberto')
    document.addEventListener('click', (event) => {
        const isClickInside = carrinho.contains(event.target) || btn_ver_carrinho.contains(event.target)
        if (carrinho.classList.contains('aberto') && !isClickInside) {
            carrinho.classList.remove('aberto')
        }
    })    
})

btn_shedar.addEventListener("click", (event) => {
    add_element_to_cart('X-shader', 19.90, 1)
})

btn_tudo.addEventListener("click", (event) => {
    add_element_to_cart('X-tudo', 29.90, 1)
})

btn_salada.addEventListener("click", (event) => {
    add_element_to_cart('X-salada', 14.99, 1)
})

btn_completao.addEventListener("click", (event) => {
    add_element_to_cart('X-completão', 39.90, 1)
})

btn_burguer.addEventListener("click", (event) => {
    add_element_to_cart('X-burguer', 22.40, 1)
})

btn_pesadao.addEventListener("click", (event) => {
    add_element_to_cart('X-pesadão', 34.90, 1)
})

btn_coca.addEventListener("click", (event) => {
    add_element_to_cart('Coca-cola', 5.90, 1)
})

btn_guarana.addEventListener("click", (event) => {
    add_element_to_cart('Guaraná', 4.90, 1)
})

btn_fanta.addEventListener("click", (event) => {
    add_element_to_cart('Fanta laranja', 4.90, 1)
})
