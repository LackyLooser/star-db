import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page'
import './app.css';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ItemDetails, { Record } from '../item-details/item-details';
import ItemList from '../item-list';


export default class App extends Component {
  swapiService = new SwapiService();
  
  render() {
    const {getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage} = this.swapiService;
    
    const leftDetail = <ItemDetails itemId='11'
                        getData={getPerson}
                        getImageUrl={getPersonImage}
                        >
                          <Record field='gender' label='Gender'/>
                          <Record field='birthYear' label='Birth Year'/>
                        </ItemDetails>
    const rightDetail = <ItemDetails itemId='5'
                        getData={getStarship}
                        getImageUrl={getStarshipImage}>
                          <Record field='model' label='Model'/>
                          <Record field='length' label='Length'/>
                          <Record field='passengers' label='Passengers'/>
                        </ItemDetails>
    return (
      <div>
        
        
        <Header />
        <RandomPlanet />
        <PeoplePage />
        <Row left={leftDetail} right={rightDetail}/>
      </div>
    );
  };

}

