import React, {Component} from 'react';
import "./css/index.scss"

class Oder extends Component {
    render() {
        return (
            <div className={"oder"}>
                <div className={"myOder"}>
                    <a href="/">
                        <p className={"left"}>我的订单</p>
                        <p className={"right"}><span>全部订单</span><i className={"iconfont icon-qianjin"}/></p>
                    </a>
                </div>
                <div className="oderOther">
                   <a href={"/"} className={"oder_pay"}>
                       <img src={require("./img/nav_01.png")} alt="nav01"/>
                       <span>代付款</span>
                   </a>
                    <a href={"/"} className={"oder_get"}>
                        <img src={require("./img/nav_02.png")} alt="nav02"/>
                        <span>待收货</span>
                    </a>
                    <a href={"/"} className={"oder_back"}>
                        <img src={require("./img/nav_03.png")} alt="nav03"/>
                        <span>退换修</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Oder;