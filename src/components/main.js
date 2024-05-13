

function main() {

    return (
        <>
            <main class="criar">
                <h1>Minhas Anotações</h1>
                <label for="titulo">Título</label>
                <input class="titulo" type="text" id="titulo">
                    <label for="texto">Texto</label>
                    <textarea class="texto" id="texto" cols="30" rows="10"></textarea>
                    <button class="salvar" onclick="criarAnotacao()">Salvar</button>
            </main>

            <section class="anotacoes">
                <h1>Anotações criadas</h1>
            </section>

        </>
    )
}

export default main