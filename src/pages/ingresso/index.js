import "../common/index.scss";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Index() {
  const [inteira, setInteira] = useState();
  const [meia, setMeia] = useState();
  const [dia, setDia] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");
  const [resp, setResp] = useState();
  function minValue() {
    if (Number(inteira) < 0) {
      setInteira(0);
    }

    if (Number(meia) < 0) {
      setMeia(0);
    }
  }
  useEffect(minValue, [inteira, meia]);
  async function ingresso() {
    const resp = await axios.post("http://localhost:5000/ingresso", {
      inteira: inteira,
      meia: meia,
      dia: dia,
      nacionalidade: nacionalidade,
    });
    setResp("o total de meias e ingressos é de R$" + resp.data.total);
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
      <h1>Calculador de ingressos</h1>
      <div className="input-container">
        <input
          type="number"
          value={inteira}
          onChange={(e) => setInteira(e.target.value)}
          placeholder="Quantidade de inteiras"
        />
        <input
          type="number"
          value={meia}
          onChange={(e) => setMeia(e.target.value)}
          placeholder="Quantidade de meias"
        />
        <input
          type="text"
          value={dia}
          onChange={(e) => setDia(e.target.value)}
          placeholder="Dia da semana"
        />
        <input
          type="text"
          value={nacionalidade}
          onChange={(e) => setNacionalidade(e.target.value)}
          placeholder="Nacionalidade do filme"
        />
        <button className="btn" onClick={ingresso}>
          Enviar
        </button>
      </div>
      <div className="resposta">{resp}</div>
    </div>
  );
}
