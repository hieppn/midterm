import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomItem from './RoomItem';
import './room.css';
class Rooms extends Component {
    constructor() {
        super();
        let data = {
            id: "1",
            name: "V.I.P 1",
            image: "a.jpg",
            typeroom: "Phòng gia đình",
            number: "4 người lớn",
            area: 45,
            price: 170000000,
            oldprice: 180000000
        }
        let rooms = JSON.parse(localStorage.getItem("rooms"));
        if (!rooms) {
            rooms = [];
            rooms.push(data);
        }
        //console.log(data);
        localStorage.setItem("rooms", JSON.stringify(rooms));
        //console.log(rooms);
        this.state = {
            rooms: rooms
        }
    }
    onClick() {
        return () => {
            alert('Thank you your order.');
        }
    }
    render() {
        this.rooms = this.state.rooms;
        console.log(this.rooms);
        return (
            <div className="bo"> 
                    {this.rooms.map((item) => <RoomItem
                        onClick={this.onClick()}
                        item={item}
                    />)}
            </div>
        )
    }
}
export default Rooms;