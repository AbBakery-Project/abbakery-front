import { useContext } from "react";
import SignUpContext from "../../contexts/SignUpContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import whiteLogo from "../../assets/images/logo-abbakery-500-200-white.png";

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
    position: absolute;
    left: 0px;
    top: 0px;
    bottom: 0px;
    height: 100vh;
    width: 30vw;
    background: var(--dark-grey);
    display: flex;
    flex-direction: column;
    align-items: top;
    padding-top: 25px;
    padding-left: 12px;
    padding-right: 5px;

    img {
        width: 120px;
        height: 50px;
    }

    h2 {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
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