import React, {Component} from 'react';

import CityCard from './CityCard';
import Navbar from './navbar';
import WeatherData from './data/weather';

import './App.scss';


class App extends Component {

    render() {

        let charts = [];
        WeatherData.forEach(city => {
            charts.push(<CityCard key={city.city} city={city} />);
        });

        return (
            <div className="App">
                <Navbar />
                <div className="CityCards">{charts}</div>
            </div>
        );
    }
}

export default App;
