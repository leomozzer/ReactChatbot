import React, { Component } from 'react';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import { connect } from 'react-redux'

import { enviaMensagem } from '../../store/actions/chat'

import { conversaWatson } from './../../store/actions/watson'


class ChatMensagem extends Component {
    constructor(props){
        super(props)

        this.inputEnviatexto = this.inputEnviatexto.bind(this);
        this.props.conversaWatson("inicio", '');
    }
    botao_estado(){
        console.log('click');
    }

    inputEnviatexto(e){

        if(e.keyCode ===13){
            //console.log('input do usuário '+e.target.value);
            const mensagem = {
                texto: e.target.value,
                origem: 'user'
            }
            //console.log(mensagem);
            
            let contexto = {}
            
            if(this.props.resposta.data && this.props.resposta.data.context){
                contexto = this.props.resposta.data.context
            }
            this.props.enviaTexto(mensagem)
            this.props.conversaWatson(mensagem, contexto)
            e.target.value = ''
            
        }
        
    }

    render(){
        return(
            <div className='chat-mensagem'>
                <br/>
                <InputGroup>
                    <Input onKeyDown={this.inputEnviatexto} placeholder='Ex: Desliga as luzes da sala'/>
                    <InputGroupAddon addonType='append'>
                        <Button onClick={this.botao_estado}>
                            Enviar
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
}

const mapDispacthToPros = (dispatch)=>{
    return{
        enviaTexto: (msg) => dispatch(enviaMensagem(msg)),
        //conversaWatson: (msg) => dispatch(conversaWatson(msg, ''))
        conversaWatson: (msg, contexto) => dispatch(conversaWatson(msg, contexto))
    }
}

const mapStateToPros = (state) => {
    return{
        resposta: state.watson.respostas
    }
}

export default connect(mapStateToPros, mapDispacthToPros)(ChatMensagem)
