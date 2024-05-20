import React, { useState } from "react";
import estilo from "./css/main.module.css";

function Main() {
    const [livros, setLivros] = useState([]);

    function criarLivro() {
        let titulo = document.getElementById('tituloLivro').value;
    
        if (titulo.trim() === '') {
            alert('Por favor, informe o título do livro.');
            return;
        }
    
        const novoLivro = {
            titulo: titulo,
        };
    
        setLivros([...livros, novoLivro]);

    
        document.getElementById('tituloLivro').value = '';
        console.log("teste")

    }

    function editarLivro(index) {
        let novoLivro = [...livros];
        let livro = novoLivro[index];
    
        document.getElementById('tituloLivro').value = livro.titulo;
    
        novoLivro.splice(index, 1);
        setLivros(novoLivro);
    }

    function apagarLivro(index) {
        
    }

    function criarCapitulo() {
        
    }

    function editarCapitulo() {
        
    }

    function apagarCapitulo() {
        
    }

    function salvarTexto() {

    }

    function editarTexto() {

    }

    return (
        <>
            <section className={estilo.livros}>
                <header className={estilo.criarNome}>
                    <label className={estilo.lbTituloLivro} htmlFor="tituloLivro">Título do livro</label>
                    <input className={estilo.titulo} type="text" id="tituloLivro" />
                    <button onClick={criarLivro} className={estilo.salvar} >Salvar</button>
                </header>

                <section className={estilo.minhasCriacoes}>
                    <h1>Meus livros</h1>
                    {livros.map((livro, index) => (
                    <div className={estilo.livro} key={index}>
                        <div>
                            <button onClick={() => editarLivro(index)} className={estilo.editar} >Alterar título</button>
                            <button onClick={() => apagarLivro(index)} className={estilo.apagar} >Excluir livro</button>
                        </div>
                        <h2>{livro.titulo}</h2>
                    </div>
                    ))}
                </section>
            </section>


            <section className={estilo.capitulos}>
                <header className={estilo.criarNome}>
                    <label className={estilo.lbTituloLivro} htmlFor="tituloCapitulo">Nome do capítulo</label>
                    <input className={estilo.titulo} type="text" id="tituloCapitulo" />
                    <button onClick={criarCapitulo} className={estilo.salvar} >Salvar</button>
                </header>

                <section className={estilo.minhasCriacoes}>
                    <h1>Meus capítulos</h1>
                    <div className={estilo.livro}>
                        <div>
                            <button onClick={editarCapitulo} className={estilo.editar} >Alterar capítulo</button>
                            <button onClick={apagarCapitulo} className={estilo.apagar} >Excluir capítulo</button>
                        </div>
                        <h2>Nome do capítulo</h2>
                    </div>
                </section>
            </section>

            <main className={estilo.textoCompleto}>
                <h1>Capítulo</h1>
                <label className={estilo.nomeDoCapitulo} htmlFor="texto">Título do capítulo</label>
                <textarea disabled className={estilo.texto} id="texto" cols="30" rows="25"></textarea>
                <div>
                    <button onClick={editarTexto} className={estilo.salvar} >Editar</button>
                    <button onClick={salvarTexto} className={estilo.salvar} >Salvar</button>
                </div>
            </main>
            
        </>
    );
}

export default Main;
