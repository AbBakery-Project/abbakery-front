import whiteLogo from "../../assets/images/logo-abbakery-500-200-white.png";
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

    const { signUpLoading, signUp } = useSignUp();
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
                    <button type="submit" disabled={signUpLoading}>Sign-up!</button>
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
        width: 195px;
        height: 80px;
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
        background: transparent;
        height: 30px;
        margin-top: 5px;
        border: 1px solid var(--white);
        border-radius: 16px;
        font-size: 10px;
        padding-left: 8px;
        
        ::placeholder {
            color: var(--white);
        }
    } 

    textarea:focus, input:focus {
        color: var(--white);
    }

    button {
        height: 56px;
        background: var(--green);
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin-top: 10px;
        margin-bottom: 16px;
        border-radius:16px;
        border-style: hidden;
        color: var(--white);
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

