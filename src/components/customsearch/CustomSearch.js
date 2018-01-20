import React, {Component} from 'react';
import { ButtonToolbar, DropdownButton, MenuItem, FormControl, ControlLabel } from 'react-bootstrap';
import axios from 'axios';
import './customsearch.css';



class CustomSearch extends Component {
    constructor(props){
        super(props);
        this.state={
            searchName: '',
            sector: '',
            minPrice: null,
            maxPrice: null,
            avgVolume: null,
            savedSearches: []
        }
    }

    createSearch(){
        let newSearch = {
            name: this.state.searchName,
            sector: this.state.sector,
            minPrice: this.state.minPrice,
            maxPrice: this.state.maxPrice,
            avgVolume: this.state.avgVolume,
        }
        axios.post('/api/newsearch', newSearch)
        .then((resp) => {
            this.setState({ savedSearches: resp.data})
        }).catch(error => console.error(error));
        this.clearInput();
    }

    handleChange(e){
        this.setState({ searchName: e.target.value})
    }

    clearInput(){
        this.setState({ sector: '', minPrice: null, maxPrice: null, avgVolume: null, searchName: ''});
    }


    render(){
        return(
            <div className="body">
                <h3>Create Custom Search:</h3>
                <ButtonToolbar className="name-input">
                    <ControlLabel>Create A Name For Your Search:</ControlLabel>
                    <FormControl type="text" placeholder="Enter Text"  onChange={(e) => this.handleChange(e)} />
                </ButtonToolbar>
                <div className="search-menu"> 
                <ButtonToolbar> 
                    <DropdownButton className="dropdown" title="Sector" id="dropdown-size-medium" onSelect={(val)=> this.setState({sector: val}) }>
                        <MenuItem eventKey="consumer">Consumer</MenuItem>
                        <MenuItem eventKey="energy">Energy</MenuItem>
                        <MenuItem eventKey="financial">Financial</MenuItem>
                        <MenuItem eventKey="healthcare">HealthCare</MenuItem>
                        <MenuItem eventKey="industrial">Industrial</MenuItem>
                        <MenuItem eventKey="basicmaterial">Basic Materials</MenuItem>
                        <MenuItem eventKey="utilities">Utilities</MenuItem>
                        <MenuItem eventKey="technology">Technology</MenuItem>
                    </DropdownButton>                      
                </ButtonToolbar>
                <ButtonToolbar>
                    <DropdownButton title="Min Price" id="dropdown-size-medium" onSelect={(val)=> this.setState({minPrice: val}) }>
                        <MenuItem eventKey="0">0</MenuItem>
                        <MenuItem eventKey="20">> $20</MenuItem>
                        <MenuItem eventKey="40">> $40</MenuItem>
                        <MenuItem eventKey="60">> $60</MenuItem>
                        <MenuItem eventKey="100">> $100</MenuItem>
                    </DropdownButton>
                </ButtonToolbar>
                <ButtonToolbar>
                    <DropdownButton title="Max Price" id="dropdown-size-medium" onSelect={(val)=> this.setState({maxPrice: val}) }>
                        <MenuItem eventKey="200">300</MenuItem>
                        <MenuItem eventKey="180">180</MenuItem>
                        <MenuItem eventKey="160">160</MenuItem>
                        <MenuItem eventKey="140">140</MenuItem>
                        <MenuItem eventKey="120">120</MenuItem>
                    </DropdownButton>
                </ButtonToolbar>
                <ButtonToolbar>
                    <DropdownButton title="Avg Daily Volume" id="dropdown-size-medium" onSelect={(val)=> this.setState({avgVolume: val}) }>
                        <MenuItem eventKey="500000">500,000</MenuItem>
                        <MenuItem eventKey="750000">750,000</MenuItem>
                        <MenuItem eventKey="1000000">1,000,000</MenuItem>
                        <MenuItem eventKey="1500000">1,500,000</MenuItem>                        
                    </DropdownButton>
                </ButtonToolbar>
                </div>
                <div className="search-labels">
                    <p>Name: {this.state.searchName}</p> <p>Sector: {this.state.sector}</p> <p>Min. Price: {this.state.minPrice}</p> <p>Max Price: {this.state.maxPrice}</p> <p>Avg Daily Volume: {this.state.avgVolume}</p>
                </div>
                <div className="btnrow clearfix">
                    <div className="createbtn">
                        <button onClick={() => {this.createSearch()}}>CREATE</button>
                        <button onClick={() => {this.clearInput()}} >CLEAR</button>
                    </div>
                </div>
                <span className="saved-searches">
                    <p>Saved Searches: </p>
                    <ButtonToolbar>
                        <DropdownButton title="Saved Searches" id="dropdown-size-medium" >
                            {this.state.savedSearches.map((s) => 
                                <MenuItem key={s.id} eventKey="">{s.name}</MenuItem>
                            )}                     
                        </DropdownButton>
                    </ButtonToolbar>
                </span>
            </div>            
           

        )
    }
}

export default CustomSearch;