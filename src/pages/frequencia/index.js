import "../common/index.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Index() {
  const [text, setText] = useState();
  const [character, setCharacter] = useState();
  const [resp, setResp] = useState();
  async function char() {
    const resposta = await axios.get(
      `http://localhost:5000/texto/${text}/${character}`
    );
    setResp(
      `A letra "${character}" aparece ${resposta.data.valor} vezes no texto ${text}`
    );
  }
  function clear(){
    setResp('')
  }

  return (
    <div className="index">
      <div className="header">
      <div className="btn-container">
          <button className="btn" onClick={clearPg}>Limpar</button>
        <Link to="/" className="btn">
          Voltar
        </Link>
          </div>
      </div>
      <h1>Frequencia</h1>
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="text"
          value={character}
          onChange={(e) => setCharacter(e.target.value)}
        />
        <button className="btn" onClick={char}>
          Enviar
        </button>
      </div>
      <div className="resposta">{resp}</div>
    </div>
  );
}
