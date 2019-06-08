import React from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'

class MessageList extends React.Component {

    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    }

    componentDidUpdate() {
        if (this.shouldScrollToBottom) {
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight
        }
    }

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