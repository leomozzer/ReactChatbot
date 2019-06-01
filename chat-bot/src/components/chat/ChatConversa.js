import React, { Component } from 'react'
import { Alert } from 'reactstrap'
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
                <div className='user'>
                    {
                        msg.origem === 'user' && <span className='user-message'>
                            <Alert color='info'><span className='message-header'>Usuário</span><br/><text className='message'>{msg.texto}</text></Alert>
                        </span>
                    }
                </div>
                <div className='bot'>
                    {
                        msg.origem === 'bot' && <span className='bot-message'>
                            <Alert color='light'><span className='message-header'>HomeBot</span><br/><text className='message'>{msg.texto}</text></Alert>
                        </span>
                    }
                </div>
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