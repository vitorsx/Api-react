import "../common/index.scss";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [cor, setCor] = useState("");
  const [resp, setResp] = useState("");
  async function verifCor() {
    if (cor.trim() === "") {
      setResp("Digite a cor na caixa de texto!");
    } else {
      const resposta = await axios.get(
        "http://localhost:5000/corprimaria/" + cor
      );

      if (resposta.data.primaria === true) {
        setResp(`a cor ${cor} é uma cor primária`);
      } else {
        setResp(`a cor ${cor} não é uma cor primária`);
      }
    }
  }
  function clear(){
    setResp('')
  }

  return (
    <div className="index">
      <div className="header">
      <div className="btn-container">
          <button className="btn" onClick={clear}>Limpar</button>
        <Link to="/" className="btn">
          Voltar
        </Link>
          </div>
      </div>
      <h1>Cor Primaria</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Escreva a cor aqui"
          value={cor}
          onChange={(e) => setCor(e.target.value)}
        />
        <button className="btn" onClick={verifCor}>
          Enviar
        </button>
      </div>
      <div className="resposta">{resp}</div>
    </div>
  );
}
