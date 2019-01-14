import React, {Component} from 'react';
import "./css/index.scss"
import {
    NavLink
} from "react-router-dom"
import {connect} from "react-redux"

class Tabbar extends Component {
    state = {
        totalNum:0
    };
    componentDidMount() {
        this.getLocalData();
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            totalNum:nextProps.total
        });
    }
    getLocalData=()=>{
        let localData = this.props.shop.cartCount;
        let totalNum = 0;
        for(let key in localData){
            if(!isNaN(key)){
                totalNum += localData[key];
            }
        }
        this.setState({
            totalNum
        })
    };
    render() {
        let {totalNum} = this.state;
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
                            {
                                totalNum>0&&(
                                    <span className={"totalNum"}>{totalNum}</span>
                                )
                            }
                            <i className={"iconfont icon-gouwuche1"}/>
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
const mapStateToProps = (state)=>{
    return {shop:state}
};
const mapDispatchToProps = {};
Tabbar = connect(mapStateToProps,mapDispatchToProps)(Tabbar);
export default Tabbar;