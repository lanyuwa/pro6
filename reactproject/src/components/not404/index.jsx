import React, {Component} from 'react';
import "./css/index.scss"

class Not404 extends Component {
    render() {
        return (
            <div className={"not404"}>
                <img src={require("./img/not404.jpg")} alt=""/>
            </div>
        );
    }
}

export default Not404;