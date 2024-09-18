import { useState } from 'react';
import Vaga from '../../components/Vaga';
import { VagasContainer } from './styled'; // Correto

type VagaProps = {
  id: string;
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
};

const vagas = [
  {
    id: '1',
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: '2',
    titulo: 'Desenvolvedor NodeJS',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 5000,
    salarioMax: 6500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  // Adicione os outros itens aqui...
];

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('');

  const vagasFiltradas = vagas.filter(
    (x) => x.titulo.toLocaleLowerCase().includes(filtro)
  );

  return (
    <div>
      <VagasContainer>
        {vagasFiltradas.map((vaga) => (
          <Vaga
            key={vaga.id}
            titulo={vaga.titulo}
            localizacao={vaga.localizacao}
            nivel={vaga.nivel}
            modalidade={vaga.modalidade}
            salarioMin={vaga.salarioMin}
            salarioMax={vaga.salarioMax}
            requisitos={vaga.requisitos}
          />
        ))}
      </VagasContainer>
    </div>
  );
};

export default ListaVagas;



