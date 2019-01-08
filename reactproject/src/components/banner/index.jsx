import React, {Component} from 'react';
import Swiper from "swiper/dist/js/swiper.min.js"
import "swiper/dist/css/swiper.min.css"
import "./css/index.scss"
import {
    NavLink
} from "react-router-dom"

class Banner extends Component {
    state = {
        data:{}
    };
    bannerAction = ()=>{
        let mySwiper = new Swiper ('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: {
                disableOnInteraction: false,
            },
            loop: true,
        })
    };
    componentDidMount() {
        fetch("http://47.100.98.54:9020/api/banner")
            .then(res=>res.json())
            .then((data)=>{
                this.setState({
                    data
                });
                this.bannerAction();
            });
    }
    render() {
        const data = this.state.data;
        return (
            <div className="swiper-container banner">
                <div className="swiper-wrapper">
                    {
                        data.status===200&&data.data.map((item,index)=>{
                            return(
                                <div key={item.id} className={"swiper-slide"}>
                                    <NavLink to={"/shopDetail"}>
                                        <img src={item.picurl} alt="item.alt"/>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
                <div className = {"swiper-pagination"}/>
            </div>
        );
    }
}

export default Banner;