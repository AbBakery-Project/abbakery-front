import { useContext } from "react";
import SignUpContext from "../../contexts/SignUpContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import whiteLogo from "../../assets/images/logo-abbakery-500-200-branco.png";

export default function Sidebar() {
    const { signUpData } = useContext(SignUpContext);

    return(
        <SidebarLeft>
            <img src={whiteLogo} alt="AbBakery"/>
            <h2>Hello there, {signUpData.name}!</h2>
            <Link to="/sign-in">My baked files</Link>
            <Link to="/sign-in">Log out</Link>
        </SidebarLeft>
    )
}

const SidebarLeft = styled.div`
    width: 25vw;
    height: 100vh;
    background: #3C4858;
    display: flex;
    flex-direction: column;
    align-items: top;
    padding-top: 25px;
    padding-left: 12px;
    padding-right: 5px;

    img {
        width: 18vw;
        height: 9,5vh;
    }

    h2 {
        font-size: 13px;
        color: #FFFFFF;
        padding-top: 5px;
        padding-left: 10px;
        padding-bottom: 16px;
    }

    a {
        font-size: 11px;
        color: #FFFFFF;
        padding-top: 8px;
        padding-left: 10px;
        text-decoration: none;
    }
`