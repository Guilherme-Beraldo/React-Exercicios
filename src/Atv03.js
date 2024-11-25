import './App.css';
import { Link } from 'react-router-dom';
import Galeria from './Galeria';
import ListaCompras from './ListaCompras';
import ListaPessoa from './ListaPessoa';
import Receita from './Receita';
import Copo from './Copo';


function Atv03() {
  return (
        <>
            <h3>Atividade 03</h3>

              <Galeria />
              
              <ListaCompras />

              <ListaPessoa />

              <Receita />

              <Copo />

            <Link to="/">Voltar</Link>
        </>
  );
}

export default Atv03;
