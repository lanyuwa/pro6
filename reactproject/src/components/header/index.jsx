import React, {Component} from 'react';
import "./css/index.scss"

class Head extends Component {
    render() {
        return (
            <div>
                <div className="head">
                    <div className="h_logo">
                        <img src={require("./img/logo.png")} alt="" />
                    </div>
                    <div className="h_search">
                        <i className="iconfont icon-sousuo"/>
                        <span>搜索商品名称</span>
                    </div>
                    <div className="h_user iconfont icon-yonghu"/>
                </div>
            </div>
        );
    }
}

export default Head;