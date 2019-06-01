import React, { Component } from 'react'
import { InputGroup, Input, InputGroupAddon, Button} from 'reactstrap'
import { connect } from 'react-redux'

import { enviaMensagem } from '../../store/actions/chat'
import { conversaWatson } from '../../store/actions/watson'

class ChatMensagem extends Component{
    constructor(props){
        super(props)

        this.state = {
            send: false,
            user_input : "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.props.conversaWatson("inicio", '');
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const myInput = e.currentTarget.myInput.value;
        const mensagem = {
            texto: myInput,
            origem: 'user'
        }

        let contexto ={}

        if(this.props.resposta.data && this.props.resposta.data.context){
            contexto = this.props.resposta.data.context
        }

        this.props.enviaTexto(mensagem)
        this.props.conversaWatson(mensagem, contexto)
        e.currentTarget.myInput.value = ''
        return;

    }
    render(){

        return(
            <div className='chat-mensagem'>
                <form onSubmit={this.handleSubmit} autoComplete='off'>
                    <br/>
                    <InputGroup>
                        <Input name='myInput' onChange={this.inputEnviatexto} placeholder='Ex: Desliga as luzes da sala'/>
                        <InputGroupAddon addonType='append'>
                            <Button>
                                Enviar
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </form>
            </div>
        )
    }
}

const mapDispacthToProps = (dispatch) =>{
    return{
        enviaTexto: (msg) => dispatch(enviaMensagem(msg)),
        conversaWatson: (msg, contexto) => dispatch(conversaWatson(msg, contexto))
    }
}

const mapStateToProps = (state) => {
    return{
        resposta: state.watson.respostas
    }
}
export default connect(mapStateToProps, mapDispacthToProps)(ChatMensagem)
