import React, { Component } from 'react';
import axios from 'axios';

class CityInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            state: '',          
            hits: [],
            estpop: "",
            country: "",
            worldregion: "",
            zip: "",
            long: "",
            lat: "",
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    async componentDidMount(input) {
        let zipcode = (input === undefined ? this.props.match.params.zipcode : input)
        try {
            let payload = await axios.get(`https://ctp-zip-api.herokuapp.com/zip/${zipcode}`);
            console.log(payload)
            this.setState({
                hits: payload.data,
                state: payload.data[0].State,
                estpop: payload.data[0].EstimatedPopulation,
                country: payload.data[0].Country,
                worldregion: payload.data[0].WorldRegion,
                zip: payload.data[0].Zipcode,
                long: payload.data[0].Long,
                lat: payload.data[0].Lat,
            });
        } catch (error){
            console.error(error);
        }
    }

    render(){
        return(
            <div>
                <input id="input" type= "text" placeholder = "Enter a zipcode"/> 
                <button onClick={() => this.componentDidMount(document.getElementById("input").value)}>Submit</button>
                <h1>State: {this.state.state} </h1>
                <h2>Cities: </h2> 
                {this.state.hits.map((cityData, index) => (
                    <div key={index}>
                        {cityData.LocationText}
                    </div>
                ))}
                <br/>
                <div>
                    Estimated Population: {this.state.estpop} <br/>
                    Country: {this.state.country} <br/>
                    WorldRegion: {this.state.worldregion} <br/>
                    Zipcode: {this.state.zip} <br/>
                    Longitude: {this.state.long} <br/>
                    Latitude: {this.state.lat} <br/>
                </div>
            </div>
        )
    }
}

export default CityInfo;