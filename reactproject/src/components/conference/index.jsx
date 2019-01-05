import React, {Component} from 'react';
import "./css/index.scss"

class Conference extends Component {
    render() {
        return (
            <div className="conference">
                <a href="/"><img src={require("./img/conference.jpg")} alt=""/></a>
            </div>
        );
    }
}

export default Conference;