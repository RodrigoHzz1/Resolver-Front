import React, { useState } from "react";
import { toast } from "react-toastify";
import api from "../../Service/api";
import "./style.css";

export default function CadastroPage() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    async function handleCadastrar(e) {
        e.preventDefault();

        if (!nome || !email) {
            toast.warn("Preencha todos os campos!");
            return;
        }

        try {
            await api.post("/usuarios", { nome, email });
            toast.success("Usuário cadastrado com sucesso!");
            setNome("");
            setEmail("");
        } catch (error) {
            toast.error("Erro ao cadastrar usuário.");
        }
    }

    return (
        <div className="cadastro-container">
            <h1>Cadastro de Usuário</h1>
            <form onSubmit={handleCadastrar}>
                <input 
                    type="text" 
                    placeholder="Nome" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                />
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}