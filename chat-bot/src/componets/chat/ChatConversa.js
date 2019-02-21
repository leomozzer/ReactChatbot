import React, { Component } from 'react'
import { Alert, Badge } from 'reactstrap'
import {connect} from 'react-redux'
import * as ReactDom from 'react-dom'

class ChatConversa extends Component{

    scrollToBottom = () => {
        const messagesContainer = ReactDom.findDOMNode(this.messagesContainer);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    componentDidMount(){
        this.scrollToBottom()
    }

    componentDidUpdate(){
        this.scrollToBottom();
    }

    renderMensagem(msg, k){
        return(
            <div key={k}>
                {
                    msg.origem === 'user' && <span>
                        <Badge color='primary'>User says:</Badge>
                        <Alert color='primary'>{msg.texto}</Alert>
                    </span>
                }

                {
                    msg.origem === 'bot' && <span>
                        <Badge color='warning'>Homebot says:</Badge>
                        <Alert color='warning'>{msg.texto}</Alert>
                    </span>
                }
            </div>
        )
    }

    render(){
        return(
            <div className='chat-conversa' ref={(el) => { this.messagesContainer = el}}>
            {
                Object.keys(this.props.mensagens).map(key => {
                    return this.renderMensagem(this.props.mensagens[key], key)
                })
            }
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        mensagens: state.chat.mensagens
    }
}

export default connect(mapStateToProps, null)(ChatConversa);