import womanImage from './woman.png';

export default function Lista() {

    const people = [{
        id: 0,
        nome: 'Robert Little',
        profissao: 'Ator',
        conquista: 'Premio Nobel em Atuação 2022',
    },
    {
        id: 1,
        nome: 'Ana banana',
        profissao: 'Cientista',
        conquista: 'Premio Nobel ciencia 2024',
    },
    {
        id: 2,
        nome: 'Fred Grufrund',
        profissao: 'Professor',
        conquista: 'Premio Nobel Palestra 2012',
    },
    {
        id: 3,
        nome: 'Maria fIFI',
        profissao: 'Diretor',
        conquista: 'Premio Nobel em cinema 2024',
    },
    {
        id: 4,
        nome: 'Guilherme Beraldo',
        profissao: 'Aluno',
        conquista: 'Premio Nobel em Atuação 2024',
    }];

    return (
        <div>
            {people.map((person) => (
                <div 
                    key={person.id} 
                    style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        border: '1px solid #ccc', 
                        margin: '10px', 
                        padding: '10px', 
                        borderRadius: '5px' 
                    }}
                >
                    <img 
                        src={womanImage} 
                        alt={`${person.nome}`} 
                        style={{ 
                            width: '100px', 
                            height: '100px', 
                            borderRadius: '50%', 
                            marginRight: '15px' 
                        }} 
                    />
                    
                    <div>
                        <h3 style={{ margin: '5px 0' }}>{person.nome}</h3>
                        <p style={{ margin: '5px 0' }}><strong>Profissão:</strong> {person.profissao}</p>
                        <p style={{ margin: '5px 0' }}><strong>Conquista:</strong> {person.conquista}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}


