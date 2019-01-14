import React, {Component} from 'react';
import "./common/css/index.css"
import routes from "./router/index"
import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom"

class App extends Component {
    render() {
        return (
            <Router basename={"react"}>
                <Switch>
                    {
                        routes.length>0&&routes.map((item,index)=>{
                            if(item.exact) return (
                                <Route
                                    key={index}
                                    exact
                                    path={item.path}
                                    component={item.component}
                                />
                            );
                            return (
                                <Route
                                    key={index}
                                    {...item}
                                />
                            )
                        })
                    }
                </Switch>
            </Router>
        );
    }
}

export default App;
