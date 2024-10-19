import logo from './logo.svg';
import './App.css';

import Relogio from './Relogio';
import Letreiro from './Letreiro';
import { Link } from "react-router-dom";

function Atv01() {
  return (
        <>
            <h3>Atividade 01</h3>
            <Letreiro />
            <Relogio />

            <Link to="/">Voltar</Link>
        </>
  );
}

export default Atv01;
