import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { SiteList } from './SiteList';
import { NameForm } from './NameForm';
import { getResults } from '../services/unAPICalls';

export class Search extends React.Component {
    state = { username: "", data: [] }
    
    callbackFunction = (childData) => {
        this.setState({username: childData})
        var response = getResults(this.state.username);
        response.then((res) => {
            const data = res.data;
            console.log(data);
            this.setState({data: data.result});
        })
        //console.log(response.data);
        //var stuff = JSON.parse(response);
        this.setState({data: response.data})

    };
    
     render() {
            return (
                <div>
                    <p>Username Search</p>
                    <NameForm callbackFunction={this.callbackFunction}/>
                    <p>{this.state.username}</p>
                    <SiteList data={this.state.data}/>
                </div>
    
            );
    
    }
}

export default Search;