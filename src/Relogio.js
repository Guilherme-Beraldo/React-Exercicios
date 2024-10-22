import React, { useState, useEffect } from 'react';

function Relogio() {

  const [horaAtual, setHoraAtual] = useState('');

  useEffect(() => {
    const atualizarRelogio = () => {
      const agora = new Date();
      const horas = String(agora.getHours()).padStart(2, '0');
      const minutos = String(agora.getMinutes()).padStart(2, '0');
      const segundos = String(agora.getSeconds()).padStart(2, '0');
      setHoraAtual(`${horas}:${minutos}:${segundos}`);
    };

    atualizarRelogio();
    const intervalo = setInterval(atualizarRelogio, 1000);

  }, []);
  
  return <div id="relogio">{horaAtual}</div>;
  
};

export default Relogio;
