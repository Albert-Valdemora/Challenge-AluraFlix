import styled from 'styled-components'

const BotonEstilizado = styled.button`
  min-width: 250px;
  height: 60px;
  border-radius: 15px;
  border-style: none;
  outline: none;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 600;
  background-color: ${p => p.$color};
  padding: 10px;
`;

const BotonesSecciones = ({color, texto}) => {
  return (
    <BotonEstilizado $color={color}>{texto}</BotonEstilizado>
  )
}

export default BotonesSecciones