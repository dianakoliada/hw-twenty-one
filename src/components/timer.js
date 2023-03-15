import React from "react";
import './clock.css';


class ClassComponentTimer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
        };
    }

    // componentWillMount() {
    //     console.log('Mounting');
    // }

    // componentDidMount() {
    //     console.log('Mounted');
    //     this.interval = setInterval(() => this.updateTime(), 1000);
    // }

    // updateTime() {
    //     this.setState({time: new Date().toLocaleTimeString()});
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log(this.state.time);
    // }
    
    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }
    
	// shouldComponentUpdate(nextProps, nextState) {
	// 	return this.props.children % 2 === 0 ? true : false;
	// }


    render() {
        return (
            <>
                <h3 className="text">Glory to Ukraine!</h3>
                <img src={this.props.img} className="uk-img" alt="ukraine" />
                <p className="date"> {this.state.date} </p>
                <p className="time"> {this.state.time} </p>
            </>
        );
    };
}

export default ClassComponentTimer;