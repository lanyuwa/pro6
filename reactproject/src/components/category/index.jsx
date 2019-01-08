import React, {Component} from 'react';
import "./css/index.scss"

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
                            <a href="/" key={item.id}>
                                <img src={item.picurl} alt="item.url"/>
                            </a>
                        )
                    })
                }
            </div>
        );
    }
}

export default Category;