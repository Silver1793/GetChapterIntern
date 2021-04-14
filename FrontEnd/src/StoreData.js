
/**
 * Richard Li
 * This is a component for App.js 
 * Uses the searchbox from SearchBox.js and the data from the backend app.js
 * Recieves the users input and tries to return the corresponding information by comparing their input to the ID formats in the backend
 */
import React, {Component} from 'react'
import axios from "axios";
import SearchBox from './SearchBox';
export default class StoreData extends Component{
    constructor(){
        super();
        this.state = { //Creates states for the search field, the organization name, the plan name, the website and the geo location
            searchField: '',
            trialOrg: '',
            trialName: '',
            trialWeb: '',
            trialGeo: '',
        }
    }
    componentDidUpdate(prevProps){ //Creates a did update component that renders everytime the user changes their search input
        axios.get("/ed").then(response =>{ //receives the /ed endpoint from the backend
            var found = false;
                for(var i = 0; i < response.data.users.length; i++){ //Creates a forloop that iterates through the data from the backend
                    if(this.state.searchField === response.data.users[i].bID || this.state.searchField === response.data.users[i].bID2){ //Checks to see if the search input is equal to either format of the ID
                        found = true;
                        this.setState(({//If the input matches a data, sets the fields to the information of the data
                            trialOrg: response.data.users[i].Organization,
                            trialName: response.data.users[i].PlanName,
                            trialWeb: response.data.users[i].Website,
                            trialGeo: response.data.users[i].GeographicArea
                        }))
                    }
                }
                if(found === false){ //Checks to see if the search field did not match with any data ID
                    this.setState(({ //If there is not data found, sets the following fields to say Not Found Yet
                        trialOrg: "Not Found Yet",
                        trialName: 'Not Found Yet',
                        trialWeb: 'Not Found Yet',
                        trialGeo: 'Not Found Yet'
                    }))
                }
            })
    }

    render(){       //renders the fields and the search box
        return(
            <>
            <SearchBox handleChange = {(e) => this.setState({searchField: e.target.value})}/> {/*Brings in the search box and updates the searchField state everytime the user changes their input*/}
            <div>Organization Name: {this.state.trialOrg}</div> {/*prints out the information in the fields */}
            <div>PlanName: {this.state.trialName}</div>
            <div>Website: {this.state.trialWeb}</div>
            <div>GeoGraphic Area: {this.state.trialGeo}</div>

            </>
        );
    }
}