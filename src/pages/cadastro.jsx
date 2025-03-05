import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <div>
      <h1>CADASTRO</h1>
      <Link to="/events">Ir para lista de eventos</Link>
    </div>
  );
}

export default Cadastro;