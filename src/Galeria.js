
import womanImage from './woman.png';

function Perfil() {
  return (
      <img src={womanImage}
      alt="mulher atriz" style={{width:'110px'}} />
  );
}

export default function Galeria() {
     return (
      <>
        <h1>Cientistas Incríveis</h1>
        <Perfil />
        <Perfil />
        <Perfil />
      </>
    );
}
