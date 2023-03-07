import { useState } from "react";
import styled from "styled-components";
import Sidebar from "../../components/Sidebar";
import Modal from "../../components/Modal";

export default function Dashboard() {
    const [liveText, liveTextUpdated] = useState('');
    const [openModal, toggleModal] = useState(false);

    async function open() {
        toggleModal(true);
    }

    return(
        <Body>
        { openModal ? <Modal toggleModal={toggleModal} text={liveText}/> : null} 
        <Sidebar/>
            <Right>
                <h2>Select the voice of your preference</h2>
                <input placeholder="Write/paste your yummy text here..." type="text" value={liveText} onChange={(e) => liveTextUpdated(e.target.value)} />
                <button onClick={open}>Bake!</button>
            </Right>
        </Body>
    )
}

const Body = styled.div`
    
    justify-content: center;
    align-items: center;
`

const Right = styled.div`
    position: absolute;
    top: 0px;
    left: 22vw;
    right: 0px;
    z-index: 1;
    bottom: 0px;
    border-radius: 40px 0px 0px 40px;
    width: 70vw;
    height: 100vh;
    background-color: var(--light-grey);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 12vw;
    padding-top: 30px;

    h2 {
        font-size: 12px;
        color: #3C4858;
        margin-bottom: 30px;
    }

    input {
        width: 60vw;
        height: 60vh;
        z-index: 0;
        overflow: scroll;
        background: var(--white);
        border: none;
        border-radius: 24px;
    } 

    input::placeholder {
        position: absolute;
        top: 0; 
        left: 0;
        padding-top: 8px;
        padding-left: 8px;
        font-style: italic;
    }

    button {
        width: 60vw;
        height: 56px;
        background: var(--green);
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin-top: 10px;
        margin-bottom: 16px;
        border-radius: 16px;
        border-style: hidden;
        color: #FFFFFF;
    }
`