import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
const options = [
    { value: 'Phòng Family', label: 'Phòng Family' },
    { value: 'Phòng Luxury double', label: 'Phòng Luxury double' },
    { value: 'Phòng Luxury triple', label: 'Phòng Luxury triple' },
]
class AddProduct extends Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
    };
    onAddRoom(event) {
        event.preventDefault();
        let name = event.target["name"].value;
        let cate = event.target["select"].value;
        let number = event.target["number"].value;
        let price = event.target["price"].value;
        let oldprice = event.target["oldprice"].value;
        let area = event.target["area"].value;
        let imge = event.target["image"].files.item(0).name;
        if (!cate) {
            cate = "Phòng Family";
        }
        if (!oldprice) {
            oldprice = 0;
        }
        let rooms = JSON.parse(localStorage.getItem("rooms"));
        if (!rooms) {
            rooms = [];
            let id = rooms.lastItem;
        }
        let oldItem = rooms.find((element) => element.name === name);
        if (oldItem) {
            alert("The room " + name + " is exixts.");
        } else {
            let room = {
                id: rooms.length + 1,
                name: name,
                price: price,
                image: imge,
                typeroom: cate,
                oldprice: oldprice,
                area: area,
                number: number
            }
            rooms.push(room);
            localStorage.setItem("rooms", JSON.stringify(rooms));
            console.log(rooms);
            alert("Successful.");
        }
    }
    render() {
        const { selectedOption } = this.state;
        return (
            <form onSubmit={this.onAddRoom}>
                <label>Name
                <input className="form-control" type="text" required name="name" /></label>
                <br /> <label>Price
                <input className="form-control" type="number" required name="price" /></label>
                <br /><label>Oldprice
                <input className="form-control" type="number" name="oldprice" /></label>
                <br /><label>Area
                <input className="form-control" type="number" required name="area" /></label>
                <br /> <label>Number
                <input className="form-control" required type="text" name="number" /></label>
                <br />  <label>
                    Type room:
                    <Select name="select"
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                    />
                     </label>
                     <br /><label>Image
                <input className="form-control" type="file" required name="image" /></label>
                <br /> <button className="btn btn-warning">Submit</button>
            </form>
        );
    }
}
export default AddProduct;