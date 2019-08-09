import React from 'react'


class HeartbeatRecord extends React.Component {


    constructor(props) {
        super(props);
        // this.decreaseHR = this.decreaseHR.bind(this);
    }

    render() {
        return (
            <div style={{background: this.props.color}}>
                <h1>{this.props.heartbeat}</h1>
                <h1>{this.props.timestamp}</h1>
                <h1>{this.props.zone}</h1>
                <button onClick={this.decreaseHR}>Click Me</button>
            </div>

        )
    }

    decreaseHR = () => {
            this.props.onDecrease(this.props.id);   // call back called, write of id
    }
}
export default HeartbeatRecord;//export default so other class can import the class