import React, {Component} from 'react';
import "./css/index.scss"
import {
    NavLink
} from "react-router-dom"

class Goods extends Component {
    state = {
        data:{}
    };
    componentDidMount() {
        fetch("http://47.100.98.54:9020/api/goods")
            .then(res=>res.json())
            .then((data)=>{
                this.setState({
                    data
                })
            })
    }
    render() {
        const data = this.state.data;
        return (
            <div className="goods">
                <ul className="shopList">
                    {
                        data.status===200&&data.data.map((item,index)=>{
                            return(
                                <li key={item.id}>
                                    <NavLink to={`/shopDetail/${item.shopid}`}>
                                        <img src={item.picurl} alt={item.alt}/>
                                        <div className="text">
                                            <p className="title">{item.title}</p>
                                            <p className="describe">{item.des}</p>
                                            <p className="price">{item.symbol}{item.price}{item.font}<span>￥2333</span></p>
                                        </div>
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Goods;