// src/components/promptInput/PromptInputComponent.js


import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';

function PromptInputComponent() {
    
    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        e.preventDefault(); 
        setMessage(e.target.value); 
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log('Enter');
            handleSubmit(e);
        }
    };

    const handleSubmit = (e) => {
        console.log(message);
    }

    return (
        <Row>
            <Col>
                <Form>
                    <Form.Group controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control 
                            placeholder="Type your message here"
                            type="text"
                            onChange={handleChange}
                            value={message}
                            onKeyDown={handleKeyDown}
                            />
                    </Form.Group>
                    <Button variant="primary" onClick={handleSubmit}>
                        Send
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}

export default PromptInputComponent