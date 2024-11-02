import React, { useState } from 'react';
import './contador.css';
import womanImage from './woman.png';
import homemImage from './homem.png';

function ContadorP() {
    const [total, setTotal] = useState(0);
    const [homens, setHomens] = useState(0);
    const [mulheres, setMulheres] = useState(0);

    function adicionarHomem() {
        setHomens(homens + 1);
        setTotal(total + 1);
    }

    function removerHomem() {
        if (homens > 0) {
            setHomens(homens - 1);
            setTotal(total - 1);
        }
    }

    function adicionarMulher() {
        setMulheres(mulheres + 1);
        setTotal(total + 1);
    }

    function removerMulher() {
        if (mulheres > 0) {
            setMulheres(mulheres - 1);
            setTotal(total - 1);
        }
    }

    function resetClick() {
        setTotal(0);
        setHomens(0);
        setMulheres(0);
    }

    return (
        <div id="container">
            <div className="header">
                <h2>Total</h2>
                <button className="reset-button" onClick={resetClick}>&#x21bb;</button>
            </div>
            <div className="total-display">{total}</div>

            <div className="counter-section">
                <div className="counter">
                    <img className="image" src={homemImage} alt="Homem" />
                    <div className="buttons">
                        <button onClick={adicionarHomem} className="add-button">+</button>
                        <button onClick={removerHomem} className="sub-button">−</button>
                    </div>
                    <h3>Homens</h3>
                    <div className="count-display">{homens}</div>
                </div>

                <div className="counter">
                    <img className="image" src={womanImage} alt="Mulher" />
                    <div className="buttons">
                        <button onClick={adicionarMulher} className="add-button">+</button>
                        <button onClick={removerMulher} className="sub-button">−</button>
                    </div>
                    <h3>Mulheres</h3>
                    <div className="count-display">{mulheres}</div>
                </div>
            </div>
        </div>
    );
}

export default ContadorP;
