import React, {Component} from 'react';
import "./css/index.scss"
import {
    NavLink
} from "react-router-dom"

class Tabbar extends Component {
    render() {
        return (
            <div className={"tabbar"}>
                <ul>
                    <li>
                        <NavLink exact to="/">
                            <i className={"iconfont icon-shouye"}/>
                            <p>首页</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/classify">
                            <i className={"iconfont icon-fenlei"}/>
                            <p>分类</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shopCart">
                            <i className={"iconfont icon-xiazai1"}/>
                            <p>购物车</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/my">
                            <i className={"iconfont icon-yonghu"}/>
                            <p>我的</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Tabbar;