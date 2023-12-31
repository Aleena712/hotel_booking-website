import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    };

    componentDidMount() {
        let rooms = this.formatData(items)
        //console.log(rooms);
        let featuredRooms = rooms.filter(room => room.featured === true);
        //console.log(featuredRooms);
        this.setState({
            rooms: rooms, sortedRooms: rooms, featuredRooms: featuredRooms, loading: false
        });
        // console.log(rooms);
        // console.log(featuredRooms);
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = { ...item.fields, images, id }
            return room;
        });
        return tempItems;
    }
    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room) => room.slug === slug);
        console.log("hello");
        return room;
    };
    render() {
        return (
            <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
