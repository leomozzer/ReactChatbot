import React from 'react'
import {Alert} from 'reactstrap'

const ChatHeader = porps=> {
    return(
        <div className='chat-header'>
            <Alert color='dark'>
            <h2>Chatbot</h2>
            </Alert>
        </div>
    )
}

export default ChatHeader
