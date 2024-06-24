import React, { useState } from "react";
import estilo from "../css/style.module.css";

function Login({ setAreaAtiva, handleLogin, usersCadastrados }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = usersCadastrados.find(
            user => user.username === username && user.password === password
        );

        if (user) {
            handleLogin();
        } else {
            alert('Credenciais inválidas.');
        }
    };

    return (
        <div className={estilo.login}>
            <h2>Login</h2>
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
                <button type="submit">Login</button>
                <button type="button" onClick={() => setAreaAtiva('cadastro')}>
                    Criar Conta
                </button>
            </form>
        </div>
    );
}

export default Login;
