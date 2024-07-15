import styled from "styled-components";
import BotonesSecciones from "./BotonesSecciones";
import CardA from "../Card";

const ContainerSeccion = styled.section`
  max-width: 1900px;
  width: 90%;
  margin: 0 auto;
`;
const SeccionesEstilizada = styled.section`
  margin-top: 50px;
`;

const Secciones = () => {
  return (
    <ContainerSeccion>
    <SeccionesEstilizada>
      <BotonesSecciones texto="Back End" color="#00c86f" />
      <CardA categoria="Back End" />
    </SeccionesEstilizada>

    <SeccionesEstilizada>
      <BotonesSecciones texto="Front End" color="#6bd1ff" />
      <CardA categoria="Front End" />
    </SeccionesEstilizada>

    <SeccionesEstilizada>
      <BotonesSecciones texto="Innovación y Gestión" color="#ffba05" />
      <CardA categoria="Innovación y Gestión" />
    </SeccionesEstilizada>
  </ContainerSeccion>
  );
};

export default Secciones;
