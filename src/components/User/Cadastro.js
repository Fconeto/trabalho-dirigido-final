import React, { useState } from "react";
import estilo from "../css/style.module.css";

function Cadastro({ setAreaAtiva, usersCadastrados, setUsersCadastrados }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username.trim() !== username) {
            alert("O nome de usuário não deve conter espaços no início ou no final.");
            return;
        }
        const startsWithNumber = /^[0-9]/.test(username.trim());
        if (startsWithNumber) {
            alert("O nome de usuário não deve começar com um número.");
            return;
        }

        if (usersCadastrados.find(user => user.username === username)) {
            alert("Nome de usuário já existe.\nTente um nome diferente");
            return;
        } 
        if (password.length < 8) {
            alert("Sua senha deve conter no mínimo 8 dígitos");
            return;
        }

        const newUser = { username, password };
        setUsersCadastrados([...usersCadastrados, newUser]);
        alert('Usuário cadastrado com sucesso!');
        setAreaAtiva('login');
    };

    return (
        <div className={estilo.cadastro}>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Cadastrar</button>
                <button type="button" onClick={() => setAreaAtiva('login')}>
                    Já tenho uma conta
                </button>
            </form>
        </div>
    );
}

export default Cadastro;
