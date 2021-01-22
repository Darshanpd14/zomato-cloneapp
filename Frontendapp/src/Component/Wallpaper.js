import React from 'react';
import '../Styles/Wallpaper.css';
import homeImg from '../Assets/homepageimg.png';

class Wallpaper extends React.Component {
    render() {
        const { locations } = this.props;
        return (
            <React.Fragment>
                <img src={homeImg} style={{ width: '100%', height: '450px' }} />
                <div>
                    <div className="logo">
                        <p>e!</p>
                    </div>
                    <div className="headings">
                        Find the best restaurants, cafes, bars
                </div>
                    <div className="locationSelector">
                        <select className="locationDropdown">
                            <option value="0">Select</option>
                            {locations.map(item => {
                                return <option value={item.location_id}>{`${item.name}, ${item.city}`}</option>
                            })}
                        </select>
                        <div>
                            <input className="restaurantsinput" type="text" placeholder="Please Enter Restaurant Name" />
                            <span className="glyphicon glyphicon-search search"></span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Wallpaper;