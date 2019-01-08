import React, {Component} from 'react';
import Head from "../header";
import Banner from "../banner";
import Category from "../category";
import Recommend from "../recommend";
import Conference from "../conference";
import Goods from "../goods";
import Tabbar from "../tabbar";

class Home extends Component {
    render() {
        return (
            <div className="App">
                <Head/>
                <Banner/>
                <Category/>
                <Recommend/>
                <Conference/>
                <Goods/>
                <Tabbar/>
            </div>
        );
    }
}

export default Home;