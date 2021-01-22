import React from 'react';
import axios from 'axios';
import '../Styles/Home.css';
import Wallpaper from './Wallpaper';
import QuickSearch from './Quicksearch';


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            locations: [],
            mealtypes: []
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:3350/citylist',
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            this.setState({ locations: response.data.city })
        }).catch(error => console.log(error))

        axios({
            method: 'GET',
            url: 'http://localhost:3350/mealtype',
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            this.setState({ mealtypes: response.data.mealtype })
        }).catch(error => console.log(error))
    }

    render() {
        const { locations, mealtypes } = this.state;
        return (
            <div>
                <Wallpaper locations={locations} />
                <QuickSearch quicksearches={mealtypes} />
            </div>
        )
    }
}

export default Home;