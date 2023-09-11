import React, { Component } from 'react';
// import defaultBcg from '../images/room-1.jpeg';
// import Hero from '../components/Hero';
// import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';

export default class SingleRoom extends Component {

    constructor(props) {
        console.log("abc");
        super(props);
        console.log(this.props);

        //const room = getRoom(this.state.slug);
        //console.log(room);
    }

    componentDidMount() { }
    render() {

        return (
            <div>
                Singleroom page
            </div>
        )
    }
}
