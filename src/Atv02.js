import './App.css';
import { Link } from 'react-router-dom';
import ContadorP from './ContadorP';
import './contador.css';

function Atv02() {
  return (
        <>
            <h3>Atividade 02</h3>

            <ContadorP />

            <Link to="/">Voltar</Link>
        </>
  );
}

export default Atv02;
