import React, {Component} from 'react';
import "./css/index.scss"
import Tabbar from "../tabbar";

class Classify extends Component {
    componentDidMount() {
        let {BMap,BMAP_STATUS_SUCCESS} = window;
        let map = new BMap.Map("allmap");
        let point = new BMap.Point(116.331398,39.897445);
        map.centerAndZoom(point,15);

        let geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
            if(this.getStatus() === BMAP_STATUS_SUCCESS){
                let mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);
                //alert('您的位置：'+r.point.lng+','+r.point.lat);
            }
            else {
                //alert('failed'+this.getStatus());
            }
        },{enableHighAccuracy: true})
    }

    render() {
        return (
            <div>
                <div className={"map"} id={"allmap"}/>
                <Tabbar/>
            </div>
        );
    }
}

export default Classify;