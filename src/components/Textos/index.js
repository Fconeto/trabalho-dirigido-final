import React from "react";
import estilo from "../css/style.module.css"

function RenderTexto({
    livros,
    setLivros,
    livroAtual,
    setLivroAtual,
    capituloAtual,
    setCapituloAtual,
    setAreaAtiva
}) {

    function salvarTexto() {

        let novoTexto = document.getElementById('texto').value;
        let capitulo = { ...capituloAtual, texto: novoTexto };

        let livro = { ...livroAtual };
        livro.capitulos[livro.capitulos.indexOf(capituloAtual)] = capitulo;

        setLivroAtual(livro);
        setCapituloAtual(capitulo);
        document.getElementById('texto').disabled = true;

        let livrosAtualizados = [...livros];
        livrosAtualizados[livros.indexOf(livroAtual)] = livro;
        setLivros(livrosAtualizados);
    }

    function editarTexto() {
        document.getElementById('texto').disabled = false;
    }

    return (
        <main className={estilo.textoCompleto}>
            <header>
                <button onClick={() => setAreaAtiva('capitulos')} className={estilo.voltar}>Voltar</button>
            </header>
            <h1>{capituloAtual.nome}</h1>
            <textarea defaultValue={capituloAtual.texto} disabled className={estilo.texto} id="texto" cols="30" rows="25"></textarea>
            <div>
                <button onClick={editarTexto} className={estilo.salvar}>Editar</button>
                <button onClick={salvarTexto} className={estilo.salvar}>Salvar</button>
            </div>
        </main>
    );
}

export default RenderTexto;
