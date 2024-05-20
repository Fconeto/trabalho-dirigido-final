const [anotacoes, setAnotacoes] = useState([]);

function criarAnotacao() {
    const titulo = document.getElementById('titulo').value;
    const texto = document.getElementById('texto').value;

    if (titulo.trim() === '' || texto.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const novaAnotacao = {
        titulo: titulo,
        texto: texto
    };

    setAnotacoes([...anotacoes, novaAnotacao]);

    document.getElementById('tituloCapitulo').value = '';
    document.getElementById('texto').value = '';
}

function editarAnotacao(index) {
    const novaListaAnotacoes = [...anotacoes];
    const anotacao = novaListaAnotacoes[index];

    document.getElementById('titulo').value = anotacao.titulo;
    document.getElementById('texto').value = anotacao.texto;

    novaListaAnotacoes.splice(index, 1);
    setAnotacoes(novaListaAnotacoes);
}

function excluirAnotacao(index) {
    const novaListaAnotacoes = [...anotacoes];
    novaListaAnotacoes.splice(index, 1);
    setAnotacoes(novaListaAnotacoes);
}


{
    <section className={estilo.anotacoes}>
    <h1>Anotações criadas</h1>
    {anotacoes.map((anotacao, index) => (
        <div className={estilo.anotacao} key={index}>
            <div className={estilo.opcoes}>
                <div>
                    <button onClick={() => editarAnotacao(index)}>Editar</button>
                    <button onClick={() => excluirAnotacao(index)}>Excluir</button>
                </div>
            </div>
            <p>{anotacao.texto}</p>
        </div>
    ))}
    </section>
}