import styled from "styled-components"
import logo from "../../assets/Logopng.png"

const LogoEstilizado = styled.img`
width: 168px;
height: 40px;
`;

const ContainerMenu = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
background-color:#000;
margin-top: 100px;
box-shadow: 1px 1px 25px 5px #257be5;
`;

const Footer = ({oscuro = false}) => {
  return (
      <ContainerMenu $oscuro={oscuro}>
            <div>
                <LogoEstilizado src={logo} alt="AluraFlix" />
            </div>
        </ContainerMenu>
  )
}

export default Footer