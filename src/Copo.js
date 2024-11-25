
function Servir ({convidado}) {
    return <h2>Copo de chá para convidado #{convidado}</h2>
}

export default function Copo () {
    let copos = [];
    for (let i = 1; i <= 5; i++) {
        copos.push(<Servir key={i} convidado={i} />);
    }
    return copos;
}