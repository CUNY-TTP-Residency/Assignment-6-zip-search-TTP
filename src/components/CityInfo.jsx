import React, { Component } from 'react';
import axios from 'axios';

class CityInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            state: '',
            city: '',
            loc: '',
            hits: []
        };
    }

    async componentDidMount() {
        let zipcode = this.props.match.params.zipcode
        try {
            let payload = await axios.get(`https://ctp-zip-api.herokuapp.com/zip/${zipcode}`);
            console.log(payload)
            this.setState({
                hits: payload.data,
                state: payload.data[0].State
            });
        } catch (error){
            console.error(error);
        }
    }

    render(){
        return(
            <div>
                <h1>State: {this.state.state} </h1>
                <h2>Cities: </h2> 
                {this.state.hits.map((cityData, index) => (
                    <div key={index}>
                        <h4>{cityData.LocationText}</h4>
                        Estimated Population: {cityData.EstimatedPopulation} <br/>
                        Country: {cityData.Country} <br/>
                        World Region: {cityData.WorldRegion} <br/>
                        Zip Code: {cityData.Zipcode} <br/>
                        Long: {cityData.Long} <br/>
                        Lat: {cityData.Lat} <br/>
                        <br/>
                    </div>
                ))}
            </div>
        )
    }
}

export default CityInfo;