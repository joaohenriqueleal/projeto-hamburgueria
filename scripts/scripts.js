const carrinho = document.querySelector('.carrinho')
const btn_ver_carrinho = document.querySelector('.ver_carrinho')

// buttons adicionar ao carrinho.
const btn_shedar = document.querySelector('.x-shedar')
const btn_tudo = document.querySelector('.x-tudo')
const btn_salada = document.querySelector('.x-salada')
const btn_completao = document.querySelector('.x-completao')
const btn_coca = document.querySelector('.coca')
const btn_guaran = document.querySelector('.guarana')

function add_element_to_cart(name, preco, quantidade) {
    const new_element = document.createElement('div')
    new_element.textContent = name
    new_element.classList.add('item-carrinho')
    carrinho.appendChild(new_element)
}

btn_ver_carrinho.addEventListener("click", (event) => {
    carrinho.classList.toggle('aberto')
})

btn_shedar.addEventListener("click", (event) => {
    add_element_to_cart('X-shader', 10, 38)
})