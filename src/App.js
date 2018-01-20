import React, { Component } from 'react';
import './App.css';
import CustomSearch from './components/customsearch/CustomSearch';
import SectorSearch from './components/sectorsearch/SectorSearch';

class App extends Component {
  render() {
    return (
      <div className="mainwrapper"> 
        <SectorSearch />
        <div className="searchwrapper">
        <CustomSearch />
        </div>
      </div>
    );
  }
}

export default App;
