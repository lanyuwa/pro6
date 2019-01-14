import React, {Component} from 'react';
import "./css/index.scss"
import {NavLink} from "react-router-dom";
import {connect} from "react-redux"
import {addCart} from "../../redux/action/cart"
import {message, Button} from "antd"
import "antd/dist/antd.css"

class ShopDetail extends Component {
    state={
        data:{},
        num:1,
        id:0,
        total:0
    };
    componentDidMount() {
        const id = this.props.match.params.id;
        fetch("http://47.100.98.54:9020/api/buygoods/"+id)
            .then(res=>res.json())
            .then((data)=>{
                if(data){
                    this.setState({
                        data,
                        id:data.shopid
                    })
                }
            });
        this.getLocalData();
    }
    back = ()=>{
        window.history.go(-1);
    };
    addStateNum=()=>{
        const num = this.state.num;
        this.setState({
            num:num+1
        })
    };
    reduceStateNum=()=>{
        const num = this.state.num;
        if(num>1){
            this.setState({
                num:num-1
            })
        }
    };
    submitToCart=()=>{
        let {num,id} = this.state;
        this.props.addCart({num,id});
        let timer = setTimeout(()=>{
            clearTimeout(timer);
            this.getLocalData();
        },200);
    };
    success = () => {
        message.success("添加成功！点击购物车查看");
    };
    getLocalData = ()=>{
        let localData = this.props.shop.cartCount;
        let total = 0;
        if(localData){
            for(let value in localData){
                if(!isNaN(value)){
                    total += localData[value];
                }
            }
            this.setState({
                total
            });
        }
    };
    render() {
        const {data,num,total} = this.state;
        return (
            <div className={"shopDetail"}>
                {
                    data&&(
                        <div>
                            <div className="sd_head">
                                <span onClick={this.back} className={"back iconfont icon-fanhui"}/>
                                <span className={"share iconfont icon-fenxiang"}/>
                            </div>
                            <div className="sd_content">
                                <div className="img">
                                    <img src={data.picurl} alt={data.alt}/>
                                </div>
                                <div className="txt">
                                    <p className="title">{data.title}</p>
                                    <p className="describe">{data.des}</p>
                                    <p className="price">{data.symbol}{data.price}</p>
                                </div>
                                <div className="btn">
                                    <p className={"reduce"} onClick={this.reduceStateNum}>-</p>
                                    <p className={"num"}>{num}</p>
                                    <p className={"add"} onClick={this.addStateNum}>+</p>
                                </div>
                            </div>
                            <div className="sd_foot">
                                <div className={"left"}>
                                    <NavLink to="/">
                                        <i className={"iconfont icon-shouye"}/>
                                        <p>首页</p>
                                    </NavLink>
                                    <NavLink to="/shopCart">
                                        {
                                            total>0&&(
                                                <span className={"totalNum"}>{total}</span>
                                            )
                                        }
                                        <i className={"iconfont icon-gouwuche1"}/>
                                        <p>购物车</p>
                                    </NavLink>
                                </div>
                                <div className={"right"} onClick={this.submitToCart}>
                                    <Button onClick={this.success} className={"button"}>
                                        加入购物车
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {shop:state}
};
const mapDispatchToProps = {addCart};
ShopDetail = connect(mapStateToProps,mapDispatchToProps)(ShopDetail);
export default ShopDetail;