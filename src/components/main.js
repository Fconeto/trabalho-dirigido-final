import React, { useState } from "react";
import estilo from "./css/main.module.css";

function Main() {
    const [livros, setLivros] = useState([]);
    const [areaAtiva, setAreaAtiva] = useState('livros');
    const [livroAtual, setLivroAtual] = useState(null);
    const [capituloAtual, setCapituloAtual] = useState(null);

    function criarLivro() {
        let titulo = document.getElementById('tituloLivro').value;

        if (titulo.trim() === '') {
            alert('Por favor, informe o título do livro.');
            return;
        }

        const novoLivro = {
            titulo: titulo,
            capitulos: []
        };

        setLivros([...livros, novoLivro]);
        document.getElementById('tituloLivro').value = '';
    }

    function editarLivro(index) {
        let livro = livros[index];
        document.getElementById('tituloLivro').value = livro.titulo;

        let novosLivros = [...livros];
        novosLivros.splice(index, 1);
        setLivros(novosLivros);
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

    function criarCapitulo() {
        let nome = document.getElementById('tituloCapitulo').value;

        if (nome.trim() === '') {
            alert('Por favor, informe o nome do capítulo.');
            return;
        }

        const novoCapitulo = {
            nome: nome,
            texto: ''
        };

        let livrosAtualizados = [...livros];
        let livro = livrosAtualizados[livros.indexOf(livroAtual)];
        livro.capitulos.push(novoCapitulo);
        setLivros(livrosAtualizados);
        setLivroAtual(livro);

        document.getElementById('tituloCapitulo').value = '';
    }

    function editarCapitulo(index) {
        let capitulo = livroAtual.capitulos[index];
        document.getElementById('tituloCapitulo').value = capitulo.nome;

        let livro = { ...livroAtual };
        livro.capitulos.splice(index, 1);
        setLivroAtual(livro);
    }

    function apagarCapitulo(index) {
        let livro = { ...livroAtual };
        livro.capitulos.splice(index, 1);
        setLivroAtual(livro);
    }

    function selecionarCapitulo(index) {
        setCapituloAtual(livroAtual.capitulos[index]);
        setAreaAtiva('texto');
    }

    function salvarTexto() {
        let novoTexto = document.getElementById('texto').value;
        let capitulo = { ...capituloAtual, texto: novoTexto };

        let livro = { ...livroAtual };
        livro.capitulos[livro.capitulos.indexOf(capituloAtual)] = capitulo;

        setLivroAtual(livro);
        setCapituloAtual(capitulo);
        document.getElementById('texto').disabled = true;
    }

    function editarTexto() {
        document.getElementById('texto').disabled = false;
    }

    function renderLivros() {
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

    function renderCapitulos() {
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

    function renderTexto() {
        return (
            <main className={estilo.textoCompleto}>
                <header>
                    <button onClick={() => setAreaAtiva('capitulos')} className={estilo.voltar}>Voltar</button>
                </header>
                <h1>{capituloAtual.nome}</h1>
                <label className={estilo.nomeDoCapitulo} htmlFor="texto">Texto do capítulo</label>
                <textarea defaultValue={capituloAtual.texto} disabled className={estilo.texto} id="texto" cols="30" rows="25"></textarea>
                <div>
                    <button onClick={editarTexto} className={estilo.salvar}>Editar</button>
                    <button onClick={salvarTexto} className={estilo.salvar}>Salvar</button>
                </div>
            </main>
        );
    }

    return (
        <>
            {areaAtiva === 'livros' && renderLivros()}
            {areaAtiva === 'capitulos' && renderCapitulos()}
            {areaAtiva === 'texto' && renderTexto()}
        </>
    );
}

export default Main;
