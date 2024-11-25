
function Item ({ nome, embalado}) {

    let nomeItem = nome;

    if (embalado) {
        nomeItem = (
            <del>
                {nomeItem + " Checked"}
            </del>
        );
    }

    return (
        <li className="item">
            {nomeItem}
        </li>
    );
}


export default function ListaCompras() {

    return (
        <section>
            <h1>Lista de compras do Guilherme</h1>
            <ul>
                <Item 
                    embalado = {true}
                    nome = "banana"
                />
                <Item 
                    embalado = {false}
                    nome = "fralda"
                />
                <Item 
                    embalado = {true}
                    nome = "cerveja"
                />
            </ul>
        </section>
    );

}