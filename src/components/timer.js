import React from "react";
import './clock.css';


class ClassComponentTimer extends React.Component {
    constructor(props) {
        super(props);
    }
    
	shouldComponentUpdate(nextProps, nextState) {
        console.log(this.props.time)
        return this.props.children % 2 === 0 ? false : true;
	}
    render() {
        return (
            <>
                <h3 className="text">Glory to Ukraine!</h3>
                <img src={this.props.img} className="uk-img" alt="ukraine" />
                <p className="date"> {this.props.date} </p>
                <p className="time"> {this.props.time} </p>
            </>
        );
    };
}

export default ClassComponentTimer;