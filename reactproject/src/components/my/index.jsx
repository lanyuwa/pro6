import React, {Component} from 'react';
import "./css/index.scss"
import Tabbar from "../tabbar";
import Myhead from "./myhead";
import Oder from "./oder"
import Spacing from "./spacing"

class My extends Component {
    render() {
        console.log(this.props);
        return (
            <div className={"my"}>
                <Myhead/>
                <Oder/>
                <Spacing/>
                <div className={"linkTo"}>
                    <a href={"/"} className={"linkTo_wrap"}>
                        <img src={require("./img/1.png")} alt="会员中心"/>
                        <div className={"underLine"}>
                            <span>会员中心</span>
                            <i className={"iconfont icon-qianjin"}/>
                        </div>
                    </a>
                    <a href={"/"} className={"linkTo_wrap"}>
                        <img src={require("./img/2.png")} alt="我的优惠"/>
                        <div>
                            <span>我的优惠</span>
                            <i className={"iconfont icon-qianjin"}/>
                        </div>
                    </a>
                    <Spacing/>
                    <a href={"/"} className={"linkTo_wrap"}>
                        <img src={require("./img/3.png")} alt="服务中心"/>
                        <div className={"underLine"}>
                            <span>服务中心</span>
                            <i className={"iconfont icon-qianjin"}/>
                        </div>
                    </a>
                    <a href={"/"} className={"linkTo_wrap"}>
                        <img src={require("./img/4.png")} alt="小米之家"/>
                        <div>
                            <span>小米之家</span>
                            <i className={"iconfont icon-qianjin"}/>
                        </div>
                    </a>
                    <Spacing/>
                    <a href={"/"} className={"linkTo_wrap"}>
                        <img src={require("./img/5.png")} alt="F码通道"/>
                        <div>
                            <span>F码通道</span>
                            <i className={"iconfont icon-qianjin"}/>
                        </div>
                    </a>
                    <Spacing/>
                    <a href={"/"} className={"linkTo_wrap"}>
                        <img src={require("./img/6.png")} alt="设置"/>
                        <div>
                            <span>设置</span>
                            <i className={"iconfont icon-qianjin"}/>
                        </div>
                    </a>
                </div>
                <Tabbar/>
            </div>
        );
    }
}

export default My;