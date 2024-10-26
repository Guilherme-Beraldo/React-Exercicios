
import React, { useState, useEffect } from 'react';

function Letreiro() {

    const mensagem = "Bem vindo à Fatec!";
    const [textoExibido, setTextoExibido] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => {
                if (prevIndex < mensagem.length) {
                    setTextoExibido((prevTexto) => prevTexto + mensagem[prevIndex]);
                    return prevIndex + 1;
                } else {
                    clearInterval(intervalId);
                    return prevIndex;
                }
            });
        }, 500);
        return () => clearInterval(intervalId); 
    }, []);

    return (
        <div>
            <div id="letreiro">
                <p>{textoExibido}</p>
            </div>
        </div>
    );
  }
  
  export default Letreiro;
  