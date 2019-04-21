import React, { Component } from 'react';
import HomePageData from './../../../mock/homePage.json';
import UniqueBox from '../../organisms/UniqueBox';
import OurPartner from '../../organisms/OurPartner';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { hero, uniqueBox, ourPartner } = HomePageData;

    return (
      <>
        <img src={hero.data.src} />
        <UniqueBox boxData={uniqueBox} />
        <OurPartner compData={ourPartner} />
      </>
    );
  }
}

export default HomePage;
