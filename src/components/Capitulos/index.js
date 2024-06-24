import React from "react";
import estilo from "../css/style.module.css"

function RenderCapitulos({
    livros,
    setLivros,
    livroAtual,
    setLivroAtual,
    setCapituloAtual,
    setAreaAtiva,
    indiceEdicaoCapitulo,
    setIndiceEdicaoCapitulo
}) {

    function criarCapitulo() {

        let nome = document.getElementById('tituloCapitulo').value;

        if (nome.trim() === '') {
            alert('Por favor, informe o nome do capítulo.');
            return;
        }

        let livro = { ...livroAtual };
        if (indiceEdicaoCapitulo !== null) {
            livro.capitulos[indiceEdicaoCapitulo].nome = nome;
            setIndiceEdicaoCapitulo(null);
        } else {
            const novoCapitulo = {
                nome: nome,
                texto: ''
            };
            livro.capitulos.push(novoCapitulo);
        }

        let livrosAtualizados = [...livros];
        livrosAtualizados[livros.indexOf(livroAtual)] = livro;
        setLivros(livrosAtualizados);
        setLivroAtual(livro);

        document.getElementById('tituloCapitulo').value = '';
    }

    function editarCapitulo(index) {
        let capitulo = livroAtual.capitulos[index];
        document.getElementById('tituloCapitulo').value = capitulo.nome;
        setIndiceEdicaoCapitulo(index);
    }

    function apagarCapitulo(index) {
        let livro = { ...livroAtual };
        livro.capitulos.splice(index, 1);
        setLivroAtual(livro);

        let livrosAtualizados = [...livros];
        livrosAtualizados[livros.indexOf(livroAtual)] = livro;
        setLivros(livrosAtualizados);
    }

    function selecionarCapitulo(index) {
        setCapituloAtual(livroAtual.capitulos[index]);
        setAreaAtiva('texto');
    }

    return (
        <section className={estilo.capitulos}>
            <header className={estilo.criarNome}>
                <button onClick={() => setAreaAtiva('livros')} className={estilo.voltar}>Voltar</button>
                <label className={estilo.lbTituloLivro} htmlFor="tituloCapitulo">Nome do capítulo</label>
                <input className={estilo.titulo} type="text" id="tituloCapitulo" />
                <button onClick={criarCapitulo} className={estilo.salvar}>Salvar</button>
            </header>

            <section className={estilo.minhasCriacoes}>
                <h1>Meus capítulos</h1>
                {livroAtual.capitulos.map((capitulo, index) => (
                    <div className={estilo.livro} key={index}>
                        <div>
                            <button onClick={() => editarCapitulo(index)} className={estilo.editar}>Alterar capítulo</button>
                            <button onClick={() => apagarCapitulo(index)} className={estilo.apagar}>Excluir capítulo</button>
                        </div>
                        <h2 onClick={() => selecionarCapitulo(index)}>{capitulo.nome}</h2>
                    </div>
                ))}
            </section>
        </section>
    );
}

export default RenderCapitulos;

