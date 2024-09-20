import { Vaga as StyledVaga, VagaTitulo, VagaLink } from './styled';

type Props = {
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
};

const Vaga = (props: Props) => (
  <li>
    <StyledVaga>
      <VagaTitulo>{props.titulo}</VagaTitulo>
      <ul>
        <li>Localização: {props.localizacao}</li>
        <li>Senioridade: {props.nivel}</li>
        <li>Tipo de contratação: {props.modalidade}</li>
        <li>
          Salário: {props.salarioMin} - {props.salarioMax}
        </li>
        <li>Requisitos: {props.requisitos.join(', ')}</li>
      </ul>
      <VagaLink href="#">
        Ver detalhes e candidatar-se
      </VagaLink>
    </StyledVaga>
  </li>
);

export default Vaga;
