import React from 'react'
import Message from './Message'

class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                {DUMMY_DATA.map((message, index) => {
                    return (
                        <Message key={index} isername={message.senderId} text={message.text} />
                    )
                })}
            </div>
        )
    }
}

export default MessageList;