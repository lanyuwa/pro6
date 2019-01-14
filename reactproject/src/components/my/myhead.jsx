import React, {Component} from 'react';
import "./css/index.scss"

class Myhead extends Component {
    render() {
        return (
            <div className={"myHead"}>
                <div>
                    <span>
                        <img src={require("./img/avatar.png")} alt=""/>
                    </span>
                    <a href="/">登录/注册</a>
                </div>
            </div>
        );
    }
}

export default Myhead;