import React, { Component } from 'react';
import './App.css';
import CustomSearch from './components/customsearch/CustomSearch';
import SectorSearch from './components/sectorsearch/SectorSearch';
import axios from 'axios';
import {Jumbotron} from 'react-bootstrap';
import Results from './components/results/Results';

class App extends Component {
  constructor(props){
    super();
    this.sectorParams = [];
    this.state = {
        selectedSector: {},
        stocksToDisplay: [{companyName: 'Apple', symbol: 'AAPL', lastPrice: 145.45}, {companyName: 'Microsoft', symbol: 'MSFT', lastPrice: 89.01}, {companyName: 'The Drilling Co.', symbol: 'TDC', lastPrice: 209.11}, {companyName: 'Jordan Co', symbol: 'JCO', lastPrice: 219.89}],
    }
    this.handleSelector = this.handleSelector.bind(this);
    this.checkState = this.checkState.bind(this);
    this.submitRequest = this.submitRequest.bind(this);
}

componentDidMount(){
  axios.get('/api/sectors')
  .then((resp) => {
      this.sectorParams = resp.data;
  })
}

submitRequest(){
  axios.get(`https://api.intrinio.com/securities/search?conditions=sector~contains~${this.state.selectedSector.name},average_daily_volume~gt~1000000,close_price~gt~30,close_price~lt~150`
    ,{headers: {
      "Authorization": "Basic " + new Buffer("5a029387f574966088eb820f2284eeb1:cfbe1baab5653cf63286d4b866541643").toString('base64')
      }
    }
  ).then((resp) => {
    // console.log(resp);
    this.setState({ stocksToDisplay: resp.data.data});
  }).catch((error) => console.error(error)) 
}

handleSelector(e){
        
  for (let i=0; i<this.sectorParams.length; i++){
      if (this.sectorParams[i].name === e.target.value){
        // console.log(this.sectorParams[i]);
          this.setState({ selectedSector: this.sectorParams[i]});
      }
  }
}

checkState(){
  console.log(this.state.selectedSector);
}


  render() {
    return (
      <div className="mainwrapper"> 
          <Jumbotron className="jumbotron" > 
            <h1>Welcome!</h1>

          </Jumbotron>
          <SectorSearch handleSelector={this.handleSelector} sectorParams={this.sectorParams} checkState={this.checkState} submitRequest={this.submitRequest} />
          <div className="searchwrapper">
          <CustomSearch />
          </div>
          <div className="resultswrapper">
            <h4>Results:</h4>
            <Results stocksArr={this.state.stocksToDisplay} />
          </div>
        </div>
    );
  }
}

export default App;
