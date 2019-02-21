import React, { Component } from 'react'

import './chat/chat.css'

import ChatHeader from './chat/ChatHeader';
import ChatMensagem from './chat/ChatMensagem';
import ChatConversa from './chat/ChatConversa';

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