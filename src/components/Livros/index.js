import React from "react";
import estilo from "../css/style.module.css"

function RenderLivros({
    livros,
    setLivros,
    setLivroAtual,
    setAreaAtiva,
    indiceEdicaoLivro,
    setIndiceEdicaoLivro
}) {
    function criarLivro() {
        let titulo = document.getElementById('tituloLivro').value;

        if (titulo.trim() === '') {
            alert('Por favor, informe o título do livro.');
            return;
        }

        if (indiceEdicaoLivro !== null) {
            const novosLivros = [...livros];
            novosLivros[indiceEdicaoLivro].titulo = titulo;
            setLivros(novosLivros);
            setIndiceEdicaoLivro(null);
        } else {
            const novoLivro = {
                titulo: titulo,
                capitulos: []
            };
            setLivros([...livros, novoLivro]);
        }

        document.getElementById('tituloLivro').value = '';
    }

    function editarLivro(index) {
        const livro = livros[index];
        document.getElementById('tituloLivro').value = livro.titulo;
        setIndiceEdicaoLivro(index);
    }

    function apagarLivro(index) {
        let novosLivros = [...livros];
        novosLivros.splice(index, 1);
        setLivros(novosLivros);
    }

    function selecionarLivro(index) {
        setLivroAtual(livros[index]);
        setAreaAtiva('capitulos');
    }

    return (
        <section className={estilo.livros}>
            <header className={estilo.criarNome}>
                <label className={estilo.lbTituloLivro} htmlFor="tituloLivro">Título do livro</label>
                <input className={estilo.titulo} type="text" id="tituloLivro" />
                <button onClick={criarLivro} className={estilo.salvar}>Salvar</button>
            </header>

            <section className={estilo.minhasCriacoes}>
                <h1>Meus livros</h1>
                {livros.map((livro, index) => (
                    <div className={estilo.livro} key={index}>
                        <div>
                            <button onClick={() => editarLivro(index)} className={estilo.editar}>Alterar título</button>
                            <button onClick={() => apagarLivro(index)} className={estilo.apagar}>Excluir livro</button>
                        </div>
                        <h2 onClick={() => selecionarLivro(index)}>{livro.titulo}</h2>
                    </div>
                ))}
            </section>
        </section>
    );
}

export default RenderLivros;