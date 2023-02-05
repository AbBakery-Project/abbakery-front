import whiteLogo from "../../assets/images/logo-abbakery-500-200-branco.png";
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import useSignUp from "../../hooks/api/useSignUp";
import SignUpContext from "../../contexts/SignUpContext";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from "styled-components";

export default function Enroll() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { loadingSignUp, signUp } = useSignUp();
    const { setSignUpData } = useContext(SignUpContext);

    const navigate = useNavigate();

    async function submit(event) {
        event.preventDefault();

        try {
            const signUpData = await signUp(name, email, password);
            setSignUpData(signUpData);
            toast("Succesfully registered!");
            navigate("/sign-in");
        } catch (error) {
            toast("Sorry! Your register failed :(");
        }
    }

    return(
        <AuthPagesBackground>
            <img src={whiteLogo} alt="AbBakery"/>
                <form onSubmit={submit}>
                    <input placeholder="Your name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <input placeholder="E-mail" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" disabled={loadingSignUp}>Sign-up!</button>
                    <Link to="/sign-in">Already registered? Sign in!</Link>
                </form>
        </AuthPagesBackground>
    )
}

const AuthPagesBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background: #3C4858;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 146px;
        height: 60px;
    }

    form {
        width: 25vw;
        height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 70px;
    }

    input {
        height: 30px;
        margin-top: 5px;
        border-radius: 3px;
        border-style: hidden;
        color: #999999;
        font-size: 10px;
        padding-left: 8px;
    }

    button {
        height: 30px;
        background: #F20267;
        margin-top: 6px;
        margin-bottom: 16px;
        border-radius: 3px;
        border-style: hidden;
        color: #FFFFFF;
    }

    a {
        text-decoration: none;
        color: #FFFFFF;
        font-size: 10px;
        text-align: center;
        line-height: 16px;
      
        :hover {
          text-decoration: underline;
        }
    }
`

