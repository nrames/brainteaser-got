import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Characters from './Characters.js';

class Home extends Component {
  
  render() {
    return (
      <Segment basic>
        <Characters /> 
      </Segment>
    );
  }
}

export default Home;
