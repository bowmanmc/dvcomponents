import React, {Component} from 'react';

import Navbar from './navbar';
import RadarChart from './RadarChart';
import WeatherData from './data/weather';

import './App.scss';


class App extends Component {

    render() {

        const city = WeatherData[0];

        return (
            <div className="App">
                <Navbar />
                <RadarChart data={city} />
            </div>
        );
    }
}

export default App;
