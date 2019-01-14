import React, {Component} from 'react';
import "./css/index.scss"
import Tabbar from "../tabbar";
import {connect} from "react-redux"
import {addCart,delShops,getGoodsNum} from "../../redux/action/cart";

class ShopCart extends Component {
    state = {
        goods:[],
        totalPrice:0,
        totalNum:0,
    };
    getData=()=>{
        let cartCount = this.props.shop.cartCount;
        let shopId = Object.keys(cartCount);
        let {goods} = this.state;
        shopId.forEach((item,index)=>{
            if( !isNaN(item) ) {
                fetch("http://47.100.98.54:9020/api/buygoods/" + item)
                    .then(res => res.json())
                    .then((data) => {
                        data["num"] = cartCount[item];
                        goods.push(data);
                        this.setState({
                            goods
                        })
                    })
            }
        });
        this.getResoult();
    };
    getResoult=()=>{
        let timer = setTimeout(()=>{
            clearTimeout(timer);
            this.totalPrice();
        },200)
    };
    totalPrice=()=> {
        let goods = this.state.goods;
        let totalNum = 0;
        let totalPrice = 0;
        goods.forEach((item, index) => {
            totalPrice += item.num * item.price;
            totalNum += item.num;
        });
        this.setState({
            totalNum,
            totalPrice
        });
    };
    addNum=(index)=>{
        let goods = this.state.goods;
        let id = goods[index].shopid;
        goods[index].num++;
        this.setState({
            goods
        });
        this.props.addCart({
            id,
            num:1
        });
        this.totalPrice();
    };
    reduceNum=(index)=>{
        let goods = this.state.goods;
        let id = goods[index].shopid;
        if(goods[index].num>1){
            goods[index].num--;
            this.setState({
                goods
            });
            this.props.addCart({
                id,
                num:-1
            });
        }
        this.totalPrice();
    };
    delShop=(index)=>{
        let goods = this.state.goods;
        let id = goods[index].shopid;
        goods.splice(index,1);
        this.setState({
            goods
        });
        this.props.delShops({
            id
        });
        this.totalPrice();
    };
    componentDidMount() {
        this.getData();
    }
    render() {
        const {goods} = this.state;
        return (
            <div className={"shopCart"}>
                <div className={"shopCartContent"}>
                    <ul>
                        {
                            goods.length>0&&goods.map((item,index)=>{
                                return(
                                    <li key={index}>
                                        <div className={"msg"}>
                                            <img src={item.picurl} alt={item.title}/>
                                            <div>
                                                <p>{item.title}</p>
                                                <p>{item.des}</p>
                                            </div>
                                        </div>
                                        <div className={"down"}>
                                            <div className={"price"}>{item.symbol}{item.price}</div>
                                            <div className={"downBtn"}>
                                                <p onClick={this.reduceNum.bind(this,index)}>-</p>
                                                <p className={"downNum"}>{item.num}</p>
                                                <p onClick={this.addNum.bind(this,index)}>+</p>
                                            </div>
                                            <div className={"del"} onClick={this.delShop.bind(this,index)}>删除</div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className={"handle"}>
                        <div className="handleText">
                            <p className={"total"}>总计：<span>￥{this.state.totalPrice}</span></p>
                            <p className={"totalNum"}>{this.state.totalNum} <span>件</span> </p>
                        </div>
                        <div className="handleBtn">去结算</div>
                    </div>
                </div>
                <Tabbar total={this.state.totalNum}/>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {shop:state}
};
const mapDispatchToProps = {addCart,delShops,getGoodsNum};
ShopCart = connect(mapStateToProps,mapDispatchToProps)(ShopCart);
export default ShopCart;