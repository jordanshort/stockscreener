import React, {Component} from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';
// import axios from 'axios';
import './sectorsearch.css';

class SectorSearch extends Component {
    // constructor(props){
    //     super(props);
    //     // this.sectorParams = [];
    //     // this.state = {
    //     //     selectedSector: {},

    //     // }
    // };

    // componentDidMount(){
    //     axios.get('/api/sectors')
    //     .then((resp) => {
    //         this.sectorParams = resp.data;
    //     })
    // }

    // handleClick(e, arr){
        
    //     for (let i=0; i<arr.length; i++){
    //         if (arr[i].name === e.target.value){
    //             this.setState({ selectedSector: arr[i]});
    //         }
    //     }
        
    // }
    // checkState(){
    //     console.log(this.state.selectedSector);
    // }

    

    render(){
        return(
            <div className="body"> 
            <h3>Search By Sector:</h3>
            <p>Default parameters: Minimum price is $20, Maximum price is $150, Minimum average daily volume is 1,000,000 shares</p>
            <ButtonToolbar className="sector-btns">
                <Button value="consumer" onClick={(e) => {this.props.handleSelector(e)}}>Consumer</Button>
                <Button value="energy" onClick={(e) => {this.props.handleSelector(e, this.props.sectorParams)}}>Energy</Button>
                <Button value="financial" onClick={(e) => {this.props.handleSelector(e, this.props.sectorParams)}}>Financial</Button>
                <Button value="healthcare" onClick={(e) => {this.props.handleSelector(e, this.props.sectorParams)}}>HealthCare</Button>
                <Button value="industrial" onClick={(e) => {this.props.handleSelector(e, this.props.sectorParams)}}>Industrial</Button>
                <Button value="basicmaterials" onClick={(e) => {this.props.handleSelector(e, this.props.sectorParams)}}>Basic Materials</Button>
                <Button value="utilities" onClick={(e) => {this.props.handleSelector(e, this.props.sectorParams)}}>Utilities</Button>
                <Button value="technololgy" onClick={(e) => {this.props.handleSelector(e, this.props.sectorParams)}}>Technology</Button>
            </ButtonToolbar>
            <ButtonToolbar>
                <Button onClick={() => {this.props.submitRequest()}}>Submit</Button>
            </ButtonToolbar>
            </div>
        )
    }
}
export default SectorSearch;