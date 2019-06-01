import React, { Component } from 'react'
import './chat/chat.css'
import ChatHeader from './chat/ChatHeader';
import ChatMensagem from './chat/ChatMensagem';
import ChatConversa from './chat/ChatConversa';
//Importa os três componentes responsáveis para a criação deste componente

class Chatbot extends Component{
    render(){
        return(
            <div className='chatbot'>
                <div className='chat-conteudo'>
                    <ChatHeader/>
                    <ChatConversa/>
                    <ChatMensagem/>
                </div>
            </div>
        )
    }
}

export default Chatbot