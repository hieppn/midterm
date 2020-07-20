import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Rooms from './components/Rooms';
import AddRoom from './components/AddRoom';



class App extends React.Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/rooms">Trang chủ</Link>
          </li>
          <li>
            <Link to="/add-room">Thêm phòng</Link>
          </li>
          <li>
            <Link to="/rooms">Phòng và mức giá</Link>
          </li>
          <li>
            <Link to="/rooms">Hình ảnh</Link>
          </li>
          <li>
            <Link to="/rooms">Giới thiệu</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/rooms">
            <Rooms />
          </Route>
          <Route path="/add-room" exact>
            <AddRoom />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
