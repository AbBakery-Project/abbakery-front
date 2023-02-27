import { useState } from "react";
import styled from "styled-components";
import { toast } from 'react-toastify';
import useSendAudioRequest from "../../hooks/api/useSendAudioRequest";

export default function Modal({ toggleModal, text }) {
    const [audioName, setAudioName] = useState("");

    const { newAudioRequestLoading, newAudioRequest } = useSendAudioRequest();

    async function submit() {
        const body = {
            audioName,
            text
        }

        try {
            await newAudioRequest(body);
            toast("Bake request sent successfully!");
            toggleModal(false);
        } catch (error) {
            toast("Sorry! Your request failed :(");
            toggleModal(false);
        }
    }

    return(
        <ModalWrapper>
            <h2>What do you want to call this audio file?</h2>
            <input placeholder="Your file name goes here..." type="text" value={audioName} onChange={(e) => setAudioName(e.target.value)}></input>
            <h2>Are you sure this is ready to bake? Wanna check the text again?</h2>
            <div>
                <button onClick={() => {toggleModal(false)}} style={{background: '#DB4444', width: '22vw'}} disabled={newAudioRequestLoading} >Better check again!</button>
                <button onClick={submit} style={{background: '#44DB78', width: '9vw'}} disabled={newAudioRequestLoading} >Nah! Bake it!</button>
            </div> 
        </ModalWrapper>
    );
}

const ModalWrapper = styled.div`
    width: 50vw;
    height: 30vh;
    background: #68778B;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    border: 1px solid #3C4858;
    padding-top: 2px;

    h2 {
        font-size: 12px;
        color: #FFFFFF;
        margin-top: 12px;
        margin-bottom: 10px;
    }

    input {
        width: 25vw;
        height: 5vh;
        background: #F5F5F5;
        border: 0.5px solid #3C4858;
        border-radius: 3px;
    } 

    input::placeholder {
        padding-left: 8px;
        font-size: 11px;
        font-style: italic;
    }

    div {
        display: flex;
        justify-content: space-between;
    }

    button {
        height: 30px;
        margin-right: 10px;
        border-radius: 3px;
        color: #FFFFFF;
    }
`