import React, {Component} from 'react';
import "./css/index.scss"
import Tabbar from "../tabbar";

class My extends Component {
    render() {
        return (
            <div>
                <h2>用户中心</h2>
                <Tabbar/>
            </div>
        );
    }
}

export default My;