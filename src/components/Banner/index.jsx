import styled from "styled-components";
import player from "../../assets/player.png";
import fondo from "../../assets/fondo.png";

const ContenedorBanner = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;
const ContenedorEstilizado = styled.div`
  max-width: 1900px;
  width: 90%;
  margin: 0 auto;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FondoImagen = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  object-fit: cover; /* Ajusta la imagen al tamaño del contenedor */
  z-index: -1; /* Coloca la imagen detrás de otros contenidos */
`;
const ImagenPlayer = styled.img`
  width: 550px;
  height: 300px;
  border-radius: 10px;
  outline: none;
`;
const Parrafo = styled.p`
  color: #fff;
  font-size: 18px;
`;
const Encabezado = styled.h2`
  color: #fff;
  font-size: 48px;
  margin: 0;
`;
const Btn = styled.button`
  color: #fff;
  font-size: 48px;
  background-color: #6bd1ff;
  font-weight: 700;
  border-radius: 15px;
  padding: 10px 15px;
  margin: 20px 0;
  border-style: none;
`;
const Informacion = styled.div`
  width: 680px;
  height: auto;
  overflow: hidden;
`;

const Banner = () => {
  return (
    <ContenedorBanner>
      <FondoImagen src={fondo} alt="" />
      <ContenedorEstilizado>
        <Flex>
        <Informacion>
          <Btn>Front end</Btn>
          <Encabezado>Challenge React</Encabezado>
          <Parrafo>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </Parrafo>
        </Informacion>
        <div>
          <figure>
            <ImagenPlayer src={player} alt="" />
          </figure>
        </div>
        </Flex>
      </ContenedorEstilizado>
    </ContenedorBanner>
  );
};

export default Banner;
