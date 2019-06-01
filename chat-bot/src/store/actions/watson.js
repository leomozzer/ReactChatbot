import axios from 'axios'
import {URL} from '../../components/credentials/arduino_url'
import { enviaMensagem } from './chat' //inporta a função enviaMensagem
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
        const url = 'https://us-central1-assistant-api-leo.cloudfunctions.net/conversa' //url em que o back-end do watson está rodando
        axios
            .post(url, {input: mensagem.texto, context: contexto}) //envia para a url a mensagem do usuário e o contexto da conversa
            .then((data) => { //resposta do watson do tipo objeto
                dispatch(conversaWatsonSucess(data));
                console.log(data.data)
                const msg = {
                    texto: data.data.output.text[0], //resposta do watson para o usuário
                    origem: 'bot' //informado quem está enviado a mensagem
                }
                dispatch(enviaMensagem(msg))//Dispara o uso da função enviaMensagem com o objeto msg
                //verifica se a intenção liga está presente na resposta do watson
                if(data.data.intents[0].intent === "liga"){//verifica se a intenção desliga está presente
                    if(data.data.entities.length > 2){
                        for(var i = 0; i < data.data.entities.length; i++){
                            if(data.data.entities[i].value === "banheiro"){
                                fetch(`${URL}/banheiro?turn=on`, {mode : 'no-cors'})
                            }
                            if(data.data.entities[i].value === "quarto"){
                                fetch(`${URL}/quarto?turn=on`, {mode : 'no-cors'})
                            }
                            if(data.data.entities[i].value === "garagem"){
                                fetch(`${URL}/garagem?turn=on`, {mode : 'no-cors'})
                            }
                            if(data.data.entities[i].value === "sala"){
                                fetch(`${URL}/sala?turn=on`, {mode : 'no-cors'})
                            }
                            if(data.data.entities[i].value === "cozinha"){
                                fetch(`${URL}/cozinha?turn=on`, {mode : 'no-cors'})
                            }
                        }
                    }
                    if((data.data.entities[0].value === "luzes" && data.data.entities[1].value === "banheiro") || (data.data.entities[1].value === "luzes" && data.data.entities[0].value === "banheiro")){
                        fetch(`${URL}/banheiro?turn=on`, {mode : 'no-cors'});//função de busca na url do arduino-server
                    }
                    if((data.data.entities[0].value === "luzes" && data.data.entities[1].value === "quarto") || (data.data.entities[1].value === "luzes" && data.data.entities[0].value === "quarto")){
                        fetch(`${URL}/quarto?turn=on`, {mode : 'no-cors'});
                    }
                    if((data.data.entities[0].value === "luzes" && data.data.entities[1].value === "garagem") || (data.data.entities[1].value === "luzes" && data.data.entities[0].value === "garagem")){
                        fetch(`${URL}/garagem?turn=on`, {mode : 'no-cors'});
                    }
                    if((data.data.entities[0].value === "luzes" && data.data.entities[1].value === "sala") || (data.data.entities[1].value === "luzes" && data.data.entities[0].value === "sala")){
                        fetch(`${URL}/sala?turn=on`, {mode : 'no-cors'});
                    }
                    if((data.data.entities[0].value === "luzes" && data.data.entities[1].value === "cozinha") || (data.data.entities[1].value === "luzes" && data.data.entities[0].value === "cozinha")){
                        fetch(`${URL}/cozinha?turn=on`, {mode : 'no-cors'});
                    }
                }
                if(data.data.intents[0].intent === "desliga"){//verifica se a intenção desliga está presente
                    if(data.data.entities.length > 2){
                        for(var j = 0; j < data.data.entities.length; j++){
                            if(data.data.entities[j].value === "banheiro"){
                                fetch(`${URL}/banheiro?turn=off`, {mode : 'no-cors'})
                            }
                            if(data.data.entities[j].value === "quarto"){
                                fetch(`${URL}/quarto?turn=off`, {mode : 'no-cors'})
                            }
                            if(data.data.entities[j].value === "garagem"){
                                fetch(`${URL}/garagem?turn=off`, {mode : 'no-cors'})
                            }
                            if(data.data.entities[j].value === "sala"){
                                fetch(`${URL}/sala?turn=off`, {mode : 'no-cors'})
                            }
                            if(data.data.entities[j].value === "cozinha"){
                                fetch(`${URL}/cozinha?turn=off`, {mode : 'no-cors'})
                            }
                        }
                    }
                    if((data.data.entities[0].value === "luzes" && data.data.entities[1].value === "banheiro") || (data.data.entities[1].value === "luzes" && data.data.entities[0].value === "banheiro")){
                        fetch(`${URL}/banheiro?turn=off`, {mode : 'no-cors'});//função de busca na url do arduino-server
                    }
                    if((data.data.entities[0].value === "luzes" && data.data.entities[1].value === "quarto") || (data.data.entities[1].value === "luzes" && data.data.entities[0].value === "quarto")){
                        fetch(`${URL}/quarto?turn=off`, {mode : 'no-cors'});
                    }
                    if((data.data.entities[0].value === "luzes" && data.data.entities[1].value === "garagem") || (data.data.entities[1].value === "luzes" && data.data.entities[0].value === "garagem")){
                        fetch(`${URL}/garagem?turn=off`, {mode : 'no-cors'});
                    }
                    if((data.data.entities[0].value === "luzes" && data.data.entities[1].value === "sala") || (data.data.entities[1].value === "luzes" && data.data.entities[0].value === "sala")){
                        fetch(`${URL}/sala?turn=off`, {mode : 'no-cors'});
                    }
                    if((data.data.entities[0].value === "luzes" && data.data.entities[1].value === "cozinha") || (data.data.entities[1].value === "luzes" && data.data.entities[0].value === "cozinha")){
                        fetch(`${URL}/cozinha?turn=off`, {mode : 'no-cors'});
                    }
                }
            }
        )
            .catch(() => dispatch(conversaWatsonError()))
            
    }
}) 