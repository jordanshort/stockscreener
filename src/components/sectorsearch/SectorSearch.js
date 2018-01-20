import React, {Component} from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';
import axios from 'axios';

class SectorSearch extends Component {
    constructor(props){
        super();
        this.sectorParams = [];
        this.state = {
            selectedSector: {},

        }
    }

    componentDidMount(){
        axios.get('/api/sectors')
        .then((resp) => {
            this.sectorParams = resp.data;
        })
    }

    handleClick(e, arr){
        
        for (let i=0; i<arr.length; i++){
            if (arr[i].name === e.target.value){
                this.setState({ selectedSector: arr[i]});
            }
        }
        
    }
    checkState(){
        console.log(this.state.selectedSector);
    }

    

    render(){
        return(
            <div>
            <p>Search By Sector:</p>
            <ButtonToolbar>
                <Button value="consumer" onClick={(e) => {this.handleClick(e, this.sectorParams)}}>Consumer</Button>
                <Button value="energy" onClick={(e) => {this.handleClick(e, this.sectorParams)}}>Energy</Button>
                <Button value="financial" onClick={(e) => {this.handleClick(e, this.sectorParams)}}>Financial</Button>
                <Button value="healthcare" onClick={(e) => {this.handleClick(e, this.sectorParams)}}>HealthCare</Button>
                <Button value="industrial" onClick={(e) => {this.handleClick(e, this.sectorParams)}}>Industrial</Button>
                <Button value="basicmaterials" onClick={(e) => {this.handleClick(e, this.sectorParams)}}>Basic Materials</Button>
                <Button value="utilities" onClick={(e) => {this.handleClick(e, this.sectorParams)}}>Utilities</Button>
                <Button value="technololgy" onClick={(e) => {this.handleClick(e, this.sectorParams)}}>Technology</Button>
            </ButtonToolbar>
            <ButtonToolbar>
                <Button onClick={() => {this.checkState()}}>Submit</Button>
            </ButtonToolbar>
            </div>
        )
    }
}
export default SectorSearch;