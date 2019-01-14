import React, {Component} from 'react';
import "./css/index.scss"
import {NavLink} from "react-router-dom";

class Category extends Component {
    state={
        data:{}
    };
    componentDidMount() {
        fetch("http://47.100.98.54:9020/api/category")
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
            <div className="category">
                {
                    data.status===200&&data.data.map((item,index)=>{
                        return(
                            <NavLink to={`/shopDetail/${item.shopid}`} key={item.id}>
                                <img src={item.picurl} alt="item.url"/>
                            </NavLink>
                        )
                    })
                }
            </div>
        );
    }
}

export default Category;