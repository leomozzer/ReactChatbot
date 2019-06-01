import React from 'react'
import {Alert} from 'reactstrap'

const ChatHeader = porps=> {
    return(
        <div className='chat-header'>
            <Alert color='secondary'>
                <h2>HomeBot</h2>
            </Alert>
        </div>
    )
}

export default ChatHeader
