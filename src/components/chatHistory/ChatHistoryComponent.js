// src/components/chatHistory/ChatHistoryComponent.js

import React from 'react'
import { Container, Row } from 'react-bootstrap';
import ChatMessageComponent from './ChatMessageComponent'

function ChatHistoryComponent() {

    // สร้าง Array เป็นตัวแทนของ message ที่จะแสดงใน chat history 
    const chatHistory = [
        { id: 1, sender: 'User', text: 'Hello' },
        { id: 2, sender: 'GPT', text: 'Hi' }
    ];

    // สร่้าง Array ของ JSX 
    // สร่้าง Array ของ JSX 
    const renderedMessage = chatHistory.map(chatMessage => (
        <ChatMessageComponent
            key={chatMessage.id}
            sender={chatMessage.sender}
            text={chatMessage.text}
            isUser={chatMessage.sender === 'User'} />
    ))

    return (
        <Row>
            <Container>
                <div className="chatroom">
                    {
                        renderedMessage
                    }
                </div>
            </Container>
        </Row>
    )
}

export default ChatHistoryComponent