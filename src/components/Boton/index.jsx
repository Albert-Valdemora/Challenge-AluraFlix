import styled from "styled-components";



const ButtonEstilizado = styled.button`
  width: 180px;
  height: 54px;
  background-color: ${props => props.$B_oscuro ? '#040404' : "transparent"};
  border: 2px solid #fff;
  border-radius: 10px;
  color: ${p => p.$T_oscuro ? '#257be5' : '#fff'};
  padding: 10px;
  margin-left: 20px;
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s; 

  &:hover {
    transform: scale(0.9);
  }
`;

const Boton = ({titulo, B_oscuro = false, T_oscuro = false}) => {
  return (
    <ButtonEstilizado $B_oscuro={B_oscuro} $T_oscuro={T_oscuro}>{titulo}</ButtonEstilizado>
  )
}

export default Boton