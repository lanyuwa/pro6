import React, {Component} from 'react';
import Head from "../header";
import Banner from "../banner";
import Category from "../category";
import Recommend from "../recommend";
import Conference from "../conference";
import Goods from "../goods";
import Tabbar from "../tabbar";
import LazyLoad from "react-lazyload"

class Home extends Component {
    render() {
        return (
            <div className={"App"}>
                <Head/>
                <LazyLoad height={200} once>
                    <Banner/>
                </LazyLoad>
                <LazyLoad height={200} once>
                    <Category/>
                </LazyLoad>
                <LazyLoad height={200} once>
                    <Recommend/>
                </LazyLoad>
                <LazyLoad height={200} once>
                    <Conference/>
                </LazyLoad>
                <LazyLoad height={200} once>
                    <Goods/>
                </LazyLoad>
                <Tabbar/>
            </div>
        );
    }
}

export default Home;