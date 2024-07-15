import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../../assets/Logopng.png"
import Boton from "../Boton";


 const ContainerMenu = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    background-color: ${p => p.$oscuro ? '#090f16' : '#262626'};
    box-shadow: 1px 1px 25px 5px #257be5;
 `;

 const LogoEstilizado = styled.img`
    width: 168px;
    height: 40px;
 `;



const Header = ({oscuro = false}) => {
    return (
        <ContainerMenu $oscuro={oscuro}>
            <div className="logo">
                <LogoEstilizado src={logo} alt="AluraFlix" />
            </div>
            <div className="navegacion">
                <nav>
                   <Link to="/">
                   <Boton titulo="Home" B_oscuro={true} T_oscuro={true} />
                   </Link>
                   <Link to="/nuevo_video">
                   <Boton titulo="Nuevo Video" B_oscuro={false} T_oscuro={false} />
                   </Link>
                </nav>
            </div>
        </ContainerMenu>
    )
}

export default Header



