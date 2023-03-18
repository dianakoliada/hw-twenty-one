import React from "react";
import './clock.css';
import ClassComponentTimer from "./timer";
import img from "../materials/uk.jpg"

class ClassComponentClock extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            seconds: new Date().getSeconds(),
        };
    }

    componentDidMount() {
        console.log('Mounted');
        this.interval = setInterval(() => this.updateTime(), 1000);
    }

    updateTime() {
        this.setState({
            time: new Date().toLocaleTimeString(),
            seconds: new Date().getSeconds(),
        });
        console.log(this.state.time);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        return (
            <div className="body">
                <ClassComponentTimer time={this.state.time} date={this.state.date} img={img}>
                    {this.state.seconds}
                </ClassComponentTimer>
                {/* <p className="time"><ClassComponentTimer time={this.state.time}/></p> */}
            </div>
        );
    };
}

export default ClassComponentClock;
