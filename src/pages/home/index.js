import { Link } from "react-router-dom";
import "../common/index.scss";

export default function index() {
  return (
    <div className="index">
      <h1>Home</h1>
      <ul>
        <li>
          {" "}
          <Link class="btn" to="/Cor">
            Cor Primaria
          </Link>
        </li>

        <li>
          <Link class="btn" to="/Freq">
            Frequencia de caracter
          </Link>
        </li>
        <li>
          <Link class="btn" to="/Ingresso">
            Ingressos
          </Link>
        </li>
        <li>
          <Link class="btn" to="/Maior">
            Maior número
          </Link>
        </li>
      </ul>
    </div>
  );
}
