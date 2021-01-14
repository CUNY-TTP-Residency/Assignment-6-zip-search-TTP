import React, { Component } from 'react';
import axios from 'axios';

class CityInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            hits: [],
        };
    }

    async componentDidMount() {
        let zipcode = this.props.match.params.zipcode
        try {
            let hits = await axios.get(`https://ctp-zip-api.herokuapp.com/zip/${zipcode}`);
            this.setState({ hits: hits.data });
            console.log(this.state.hits)
        } catch (error){
            console.error(error);
        }
    }

    render(){
        return(
            <div>
                Test
            </div>
        )
    }
}

export default CityInfo;