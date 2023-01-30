import whiteLogo from "../../assets/images/logo-abbakery-500-200-branco";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import useSignUp from "../../hooks/api/useSignUp";
import { toast } from 'react-toastify';

export default function Enroll() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { loadingSignUp, signUp } = useSignUp();
    const navigate = useNavigate();

    async function submit(event) {
        event.preventDefault();

        try {
            await signUp(name, email, password);
            toast("Succesfully registered!");
            navigate("/sign-in");
        } catch (error) {
            toast("Sorry! Your register failed :(");
        }
    }


    return(
        <>
        <Container>
            <img src={whiteLogo} alt="AbBakery"/>
            <form onSubmit={submit}>
                <Input label="Your name" type="text" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
                <Input label="E-mail" type="text" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input label="Password" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit" disabled={loadingSignUp}>Sign-up!</Button>
            </form>
            <Link to="/sign-in">Already registered? Click here to sign in!</Link>
        </Container>
        </>
    )
}