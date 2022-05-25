import "../common/index.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Index() {
  const [numero, setNumero] = useState();
  const [numeros, setNumeros] = useState([""]);
  const [resp, setResp] = useState();
  function add() {
    setNumeros([...numeros, numero]);
    setNumero("");
  }

  async function verificar() {
    const resposta = await axios.post("http://localhost:5000/maior", numeros);
    const toString = String(numeros);
    const seq = toString.replace(/,/g, " ");
    setResp(
      `o maior número da sequência ${seq} é o número: ${resposta.data.maior}`
    );
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
      <h1>Maior número</h1>
      <div className="input-container">
        <input
          type="number"
          value={numero}
          onChange={(e) => setNumero(Number(e.target.value))}
          placeholder="adicionar número"
        />
        <button className="btn" onClick={add}>
          Adicionar
        </button>
        <button className="btn" onClick={verificar}>
          Verificar maior número
        </button>
        <div className="container-seq">
          {numeros.map((item) => (
            <div className="sequencia"> {item} </div>
          ))}
        </div>
      </div>
      <div className="resposta"> {resp} </div>
    </div>
  );
}
