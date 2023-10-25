document.addEventListener('DOMContentLoaded', function() {
    const filtroProdutos = document.getElementById('filtroProdutos');
    const listaProdutos = document.getElementById('listaProdutos');
    const produtos = Array.from(document.querySelectorAll('.produto'));

    filtroProdutos.addEventListener('change', function() {
        const categoriaSelecionada = this.value;

        produtos.forEach(produto => {
            const categoriaProduto = produto.classList[1];
            const precoProduto = parseFloat(produto.dataset.preco);

            if (categoriaSelecionada === 'todos' || categoriaSelecionada === categoriaProduto) {
                produto.style.display = 'block';
            } else {
                produto.style.display = 'none';
            }
        });

        if (categoriaSelecionada === 'maiorPreco') {
            produtos.sort((a, b) => parseFloat(b.dataset.preco) - parseFloat(a.dataset.preco));
        } else if (categoriaSelecionada === 'menorPreco') {
            produtos.sort((a, b) => parseFloat(a.dataset.preco) - parseFloat(b.dataset.preco));
        }

        produtos.forEach(produto => listaProdutos.appendChild(produto));
    });
});
