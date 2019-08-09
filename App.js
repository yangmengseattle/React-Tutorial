import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeartbeatRecord from './HeartbeatRecord';

class App extends React.Component {
    constructor(props) {
        super(props);
        // let {heartbeat, timestamp} =  {...this.mockData()};

        // this.state = {heartbeat, timestamp};
        this.state = {records: this.mockData()};
        // K:V pair with the same name
    }

    render() {
        //render should only depends on props and state
        const records  = this.state.records;

        const recordList = records.filter(record=>record.heartbeat > 100).map(record=>(
           <HeartbeatRecord heartbeat={record.heartbeat} timestamp={record.timestamp} id={record.id}
                                         zone={record.zone} color={record.color} onDecrease={this.decrease}></HeartbeatRecord>
        ));



        return (
            <div>
                {/*<HeartbeatRecord heartbeat={this.state.heartbeat} timestamp={this.state.timestamp}></HeartbeatRecord>/*/}
                {/*<HeartbeatRecord heartbeat={this.state.record.heartbeat} timestamp={this.state.record.timestamp}*/}
                {/*                 zone={this.state.record.zone} color={this.state.record.color} ></HeartbeatRecord>*/}
                {recordList}
                {/*parent (App) assign child(HeartbeatRecord) a value,*/}
                {/*can't do it the other way around*/}


            </div>
        )
    }

    mockData() {
        // network
        return [{
            id: 0,
            heartbeat: 115,
            timestamp: '6/11/2019/5:48pm',
            zone : "maximum",
            color : "#81ff00",
        },
            {
                id: 1,
                heartbeat: 90,
                timestamp: '6/11/2019/5:48pm',
                zone : "maximum",
                color : "#81ff00",
            }]
        ;
    }

    // Aladdin and the magic lamp, the lamp
    decrease = (id) => {
        for (let i = 0; i < this.state.records.length; i++) {
            if (this.state.records[i].id === id) {
                this.state.records[i].heartbeat--;
            }
        }
        // notify React of the change
        this.setState(this.state);
    }
}

export default App;
