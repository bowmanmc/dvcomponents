import React, {Component} from 'react';

import RadarChart from './RadarChart';
import WeatherData from './data/weather';

import './App.scss';


class App extends Component {

    render() {

        const city = WeatherData[0];

        return (
            <div className="App">
                <RadarChart data={city} />
            </div>
        );
    }
}

export default App;
