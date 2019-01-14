import React, {Component} from 'react';
import "./css/index.scss"
import {NavLink} from "react-router-dom"

class Conference extends Component {
    state = {
        data:{}
    };
    componentDidMount() {
        fetch("http://47.100.98.54:9020/api/conference")
            .then(res=>res.json())
            .then((data)=>{
                if(data.status===200){
                    this.setState({
                        data:data.data
                    })
                }
            })
    }
    render() {
        const data = this.state.data;
        return (
            <div className="conference">
                <a href="/">
                    {
                        data.shopid&&(
                            <NavLink to={`/shopDetail/${data.shopid}`}>
                                <img src={data.picurl} alt={data.alt}/>
                            </NavLink>
                        )
                    }
                </a>
            </div>
        );
    }
}

export default Conference;