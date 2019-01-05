import React, {Component} from 'react';
import "./common/css/index.css"
import Head from "./components/header"
import Banner from "./components/banner"
import Category from "./components/category"
import Recommend from "./components/recommend"
import Conference from "./components/conference"

class App extends Component {
    render() {
        return (
            <div className="App">
                <Head/>
                <Banner/>
                <Category/>
                <Recommend/>
                <Conference/>
            </div>
        );
    }
}

export default App;
