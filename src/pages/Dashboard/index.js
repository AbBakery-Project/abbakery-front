import { useState } from "react";
import styled from "styled-components";
import Sidebar from "../../components/Sidebar";
import Modal from "../../components/Modal";

export default function Dashboard() {
    const [liveText, liveTextUpdated] = useState('');
    const [openModal, toggleModal] = useState(false);

    return(
        <Body>
        { openModal ? <Modal toggleModal={toggleModal} text={liveText}/> : null} 
        <Sidebar/>
            <Right>
                <h2>Select the voice of your preference</h2>
                <input placeholder="Write/paste your yummy text here..." type="text" value={liveText} onChange={(e) => liveTextUpdated(e.target.value)} />
                <button onClick={() => {toggleModal(true)}}>Bake!</button>
            </Right>
        </Body>
    )
}

const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Right = styled.div`
    width: 75vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 30px;
    margin-left: 50px;

    h2 {
        font-size: 12px;
        color: #3C4858;
        margin-bottom: 30px;
    }

    input {
        width: 60vw;
        height: 60vh;
        overflow: scroll;
        background: #F5F5F5;
        border: 0.5px solid #3C4858;
        border-radius: 3px;
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
        height: 30px;
        background: #F20267;
        margin-top: 10px;
        margin-bottom: 16px;
        border-radius: 3px;
        border-style: hidden;
        color: #FFFFFF;
    }
`