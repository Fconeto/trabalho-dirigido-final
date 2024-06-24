import React, { useState } from "react";
import RenderLivros from "./Livros";
import RenderCapitulos from "./Capitulos";
import RenderTexto from "./Textos";
import Login from "./User/Login";
import Cadastro from "./User/Cadastro";

function Main() {
    const [livros, setLivros] = useState([]);
    const [areaAtiva, setAreaAtiva] = useState('login'); // login como área inicial
    const [livroAtual, setLivroAtual] = useState(null);
    const [capituloAtual, setCapituloAtual] = useState(null);
    const [indiceEdicaoLivro, setIndiceEdicaoLivro] = useState(null);
    const [indiceEdicaoCapitulo, setIndiceEdicaoCapitulo] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [usersCadastrados, setUsersCadastrados] = useState([]);

    const handleLogin = () => {
        setIsAuthenticated(true);
        setAreaAtiva('livros');
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setAreaAtiva('login');
    };

    return (
        <>
            {!isAuthenticated ? (
                areaAtiva === 'login' ? (
                    <Login
                        setAreaAtiva={setAreaAtiva}
                        handleLogin={handleLogin}
                        usersCadastrados={usersCadastrados}
                    />
                ) : (
                    <Cadastro
                        setAreaAtiva={setAreaAtiva}
                        usersCadastrados={usersCadastrados}
                        setUsersCadastrados={setUsersCadastrados}
                    />
                )
            ) : (
                <>
                    {areaAtiva === 'livros' && (
                        <RenderLivros
                            livros={livros}
                            setLivros={setLivros}
                            setLivroAtual={setLivroAtual}
                            setAreaAtiva={setAreaAtiva}
                            indiceEdicaoLivro={indiceEdicaoLivro}
                            setIndiceEdicaoLivro={setIndiceEdicaoLivro}
                        />
                    )}

                    {areaAtiva === 'capitulos' && (
                        <RenderCapitulos
                            livros={livros}
                            setLivros={setLivros}
                            livroAtual={livroAtual}
                            setLivroAtual={setLivroAtual}
                            setCapituloAtual={setCapituloAtual}
                            setAreaAtiva={setAreaAtiva}
                            indiceEdicaoCapitulo={indiceEdicaoCapitulo}
                            setIndiceEdicaoCapitulo={setIndiceEdicaoCapitulo}
                        />
                    )}

                    {areaAtiva === 'texto' && (
                        <RenderTexto
                            livros={livros}
                            setLivros={setLivros}
                            livroAtual={livroAtual}
                            setLivroAtual={setLivroAtual}
                            capituloAtual={capituloAtual}
                            setCapituloAtual={setCapituloAtual}
                            setAreaAtiva={setAreaAtiva}
                        />
                    )}
                    <button onClick={handleLogout}>Logout</button>
                </>
            )}
        </>
    );
}

export default Main;
