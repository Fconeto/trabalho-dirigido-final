function criarAnotacao() {
    const titulo = document.getElementById('titulo').value;
    const texto = document.getElementById('texto').value;

    if (titulo.trim() === '' || texto.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const novaAnotacao = `
        <div class="anotacao">
            <div class="opcoes">
                <h2 class="titulo_ann">${titulo}</h2>
                <div>
                    <button onclick="editarAnotacao(this)">Editar</button>
                    <button onclick="excluirAnotacao(this)">Excluir</button>
                </div>
            </div>
            <p>${texto}</p>
        </div>
    `;

    document.querySelector('.anotacoes').innerHTML += novaAnotacao;

    document.getElementById('titulo').value = '';
    document.getElementById('texto').value = '';

}

function editarAnotacao(botaoEditar) {
    const anotacao = botaoEditar.parentElement.parentElement.parentElement;
    const titulo = anotacao.querySelector('.titulo_ann').textContent;
    const texto = anotacao.querySelector('p').textContent;

    document.getElementById('titulo').value = titulo;
    document.getElementById('texto').value = texto;

    anotacao.remove();
}

function excluirAnotacao(botaoExcluir) {
    const anotacao = botaoExcluir.parentElement.parentElement.parentElement;
    anotacao.remove();
}