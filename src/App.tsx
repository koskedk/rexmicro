import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export class App extends React.Component<any,any> {


    constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            tasks: []
        }
    }



    async componentDidMount() {
        const response = await axios.get(`./api/tasks`);
        const data = await response.data;
        this.setState({
            tasks: data
        })
        console.log(data);
    }

    render() {
        const taskList=this.state.tasks.map((t:any)=><li key={t.id}>{t.name}</li>);

        return (
            <div className="App">
                Tasks
                <ul>
                    {taskList}
                </ul>

            </div>
        );
    }
}

export default App;
