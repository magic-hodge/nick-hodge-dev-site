import React from 'react';
import styled from 'styled-components';

const MessageMe = styled.div`
    
    .message-button {
        display: block;
        width: 195px;
        margin: 20px auto;
        padding: 5px 15px;
        text-decoration: none;
        letter-spacing: 1px;
        font-family: 'Roboto Slab', serif;
        text-transform: uppercase;
        border-radius: 25px;
        background-color: #112d4e;
        color: #dbe2ef;
        transition: 0.5s ease;
        box-shadow: 2px 2px;
    }

    .message-button:hover {
        background-color: #3f72af;
        color: #112d4e;
    }

    .fa-envelope {
        padding: 10px;
    }
`;

function MessageButton() {
    return (
        <MessageMe className="message-box home-main">
            <a className="message-button home-main"
            href="mailto:nick.m.hodge@gmail.com">
                <i className="fas fa-envelope"></i>
                Message Me
            </a>
        </MessageMe>
    );
}

export default MessageButton;