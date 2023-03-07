import darkGreyLogo from "../../assets/images/logo-abbakery-500-200-dark-grey.png";
import { useState, useContext } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import UserContext from '../../contexts/UserContext';

import useSignIn from "../../hooks/api/useSignIn";
import styled from "styled-components";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { loadingSignIn, signIn } = useSignIn();
    const { setUserData } = useContext(UserContext);

    const navigate = useNavigate();

    async function submit(event) {
        event.preventDefault();

        try {
            const userData = await signIn(email, password);
            setUserData(userData);
            toast("Succesfully logged in!");
            navigate('/dashboard');
        } catch (error) {
            toast("Sorry! You could not log in :(");
        }
    }

    return(
        <AuthPagesBackground>
            <img src={darkGreyLogo} alt="AbBakery"/>
                <form onSubmit={submit}>
                    <input placeholder="E-mail" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" disabled={loadingSignIn}>Sign-in!</button>
                    <Link to="/">Not registered yet? Sign up!</Link>
                </form>
        </AuthPagesBackground>
    )
}

const AuthPagesBackground = styled.div`
    width: 100vw;
    height: 100vh;
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
        border: 1px solid var(--dark-grey);
        border-radius: 16px;
        font-size: 10px;
        padding-left: 8px;
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
        color: #3C4858;
        font-size: 10px;
        text-align: center;
        line-height: 16px;
      
        :hover {
          text-decoration: underline;
        }
    }
`

