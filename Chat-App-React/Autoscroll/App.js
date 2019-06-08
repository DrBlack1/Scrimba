import React from 'react'
import Chatkit from '@pusher/chatkit'
import MessageList from './components/MessagesList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'

import { tokenUrl, instanceLocator } from './config'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            roomId: null,
            messages: [],
            joinableRooms: [],
            joinedRooms: []
        }
        this.SendMessage = this.SendMessage.bind(this)
        this.subscribeToRoom = this.subscribeToRoom.bind(this)
        this.getRooms = this.getRooms.bind(this)
    }

    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: 'patrickmack',
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })

        chatManager.connect()
        .then(currentUser => {
            this.currentUser = currentUser
            this.getRooms()
        })
        .catch(err => console.log('error on connecting', err))
    }
    
    getrooms(){
        this.currentUser.getJoinableRooms()
        .then(joinableRooms => {
            this.setState({
                joinableRooms,
                joinedRooms: this.currentUser.rooms
            })
        })
        .catch(err => console.log('error on joinableRooms: ', errr))
    }

    subscribeToRoom(roomId) {
        this.setState({ messages: [] })
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onNewMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
        .then(room => {
            this.setState({
                roomId: room.id
            })
            this.getRooms()
        })
        .catch(err => console.log('error on connecting: ', err))
    }

    sendMessage(text) {
        this.currentUser.sendMessage({
            text,
            roomId: this.state.roomId
        })
    }

    render() {
        return (
            <div className="app">
                <RoomList 
                    roomId={this.state.roomId}
                    subscribeToRoom={this.subscribeToRoom}
                    rooms={[...this.state.joinableRooms, ...this.state.joinableRooms]} />
                <MessageList messages={this.state.messages }/>
                <SendMessageForm sendMessages={this.sendMessage} />
                <NewRoomForm />
            </div>
        );
    }
}

export default App;