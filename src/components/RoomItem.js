import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyFormat from 'react-number-format';
import './room.css';
class RoomItem extends Component {
    render() {
        const { item, onClick } = this.props;
        return (
            <div className="cont">
                <div className="ytr">
                    <img className="card-img-top" src={"img/" + item.image} width={200} height={200} alt="Card image cap" />
                    <div className="card-body">
                        <div class="row">
                            <h4 className="card-text"><b>{item.typeroom}</b></h4>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <b>Phòng</b>
                            </div>
                            <div class="col-sm">
                                <i>{item.name}</i>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <b>Chỗ nghĩ</b>
                            </div>
                            <div class="col-sm">
                                <i>{item.number}</i>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <b>Kích thước</b>
                            </div>
                            <div class="col-sm">
                                <i>{item.area}</i>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <b>Giá phòng</b>
                            </div>
                            <div class="col-sm">
                            <div className="card-text"><CurrencyFormat readOnly className="a" thousandSeparator={true} prefix={''} value={item.price} />vnđ</div>
                            </div>
                        </div> 
                        <p>Xem    <button className="aa" onClick={onClick}>Đặt phòng</button></p>
                    </div>
                </div>
            </div>
        );
    }
}
export default RoomItem;