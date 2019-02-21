import axios from 'axios'

import { enviaMensagem } from './chat'


export const conversaWatsonRequest = ()=>{
    return{
        type: 'CONVERSA_WATSON_REQUEST',
        carregando: true,
        erro: false
    }
}

export const conversaWatsonSucess = (respostas) => {
    return{
        type: 'CONVERSA_WATSON_SUCESS',
        respostas,
        carregando: false,
        erro: false
    }
}

export const conversaWatsonError = () => {
    return {
        type: 'CONVERSA_WATSON_ERRO',
        carregando: false,
        erro: true
    }
}

export const conversaWatson = ((mensagem, contexto) =>{
    return dispatch => {
        dispatch(conversaWatsonRequest())
        const url = 'https://us-central1-host-watson-api.cloudfunctions.net/conversa'
        axios
            .post(url, {input: mensagem.texto, context: contexto})
            .then((data) => {
                dispatch(conversaWatsonSucess(data));
                const msg = {
                    texto: data.data.output.text[0],
                    origem: 'bot'
                }
                dispatch(enviaMensagem(msg))
                if(data.data.intents[0].intent === "Lights_On"){
                    if(data.data.entities[0].value === "lights"){
                        fetch("http://localhost:3500/central?turn=on");
                    }
                }
                if(data.data.intents[0].intent === "Lights_Off"){
                    if(data.data.entities[0].value === "lights"){
                        fetch("http://localhost:3500/central?turn=off");
                    }
                }
            }
        )
            .catch(() => dispatch(conversaWatsonError()))
            
    }
}) 