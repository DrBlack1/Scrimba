import React from 'react'

class RoomList extends React.Component {
    render () {
        const orderedrooms = [...this.props.rooms].sort((a, b) => a.id > b.id);
        return (
            <div className="rooms-list">
                <h3>Your rooms:</h3>
                <ul>
                    {ordeREDrooms.map((room, i) => {
                        const active = this.props.currentRoomId === room.id ? 'active' : '';
                        return (
                            <li key={i} className={'room ' + active}>
                                <a href='#' onClick={() => this.props.subscribeToRoom(room.id)}>
                                    # {room.name}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default RoomList;