import styled from "styled-components";
import whiteLogo from "../../assets/images/logo-abbakery-500-200-branco.png";
import Menu from "./Menu";

export default function Header() {
    return(
        <Header>
            <img src={whiteLogo} alt="AbBakery"/>
            <Menu/>
        </Header>
    )
}

const Header = styled.div`
    width: 100vw;
    height: 20px;
    background: #3C4858;
    display: flex;
    justify-content: space-between;
    align-items: center;
`