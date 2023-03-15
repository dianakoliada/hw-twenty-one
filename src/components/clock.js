import React from "react";
import './clock.css';

class ClassComponentClock extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
        };
        console.log(this.props.child);
    }

    componentWillMount() {
        console.log('Mounting');
    }

    componentDidMount() {
        console.log('Mounted');
        this.interval = setInterval(() => this.updateTime(), 1000);
    }

    updateTime() {
        this.setState({time: new Date().toLocaleTimeString()});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.time);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        return (
            <div className="body">
                <h3 className="text">Glory to Ukraine!</h3>
                <img src={this.props.img} className="uk-img" alt="ukraine" />
                <p className="date"> {this.state.date} </p>
                <p className="time"><ClassComponentTimer /></p>
            </div>
        );
    };
}

class ClassComponentTimer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timer: new Date().toLocaleTimeString(),
        };
    }

    componentWillMount() {
        console.log('Mounting');
    }

    componentDidMount() {
        console.log('Mounted');
        this.interval = setInterval(() => this.updateTime(), 2000);
    }

    updateTime() {
        this.setState({timer: new Date().toLocaleTimeString()});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.timer);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.children % 2 === 0 ? false : true;
	}
    render() {
        return (
            <p className="time--child"> {this.state.timer} </p>
        );
    };
}

export {
    ClassComponentClock,
    ClassComponentTimer, 
};