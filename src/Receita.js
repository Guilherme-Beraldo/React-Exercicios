
function Cha ({qtdPessoas}) {
    return (
        <ol>
            <li>Ferva {qtdPessoas} copos de agua.</li>
            <li>Adicione {qtdPessoas} colheres de chá e {0.5 * qtdPessoas} de tempero</li>
            <li>Adicione {0.5 * qtdPessoas} copos de leite para ferver com açucar a gosto</li>
        </ol>
    )
}

export default function Receita () {
    return (
        <>
            <h1>Receita de Chá Temperado</h1>
            <h2>Para 2 pessoas</h2>
            <Cha qtdPessoas={2} />
            <h2>Para 4 pessoas</h2>
            <Cha qtdPessoas={4} />
        </>
    );
}