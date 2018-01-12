import React, { Component } from 'react';
import axios from 'axios';
import { 
  Header, 
  Card,
  Image, 
  Segment,
  Dimmer,
  Loader,
 } from 'semantic-ui-react';

class Characters extends Component {
  state = { characters: [], loaded: false };

  componentDidMount() {
    axios.get('https://api.got.show/api/characters/')
    .then( res => {
      this.setState({ characters: res.data, loaded: true });
    })
    .catch(err => {
      console.log(err.response);
    });
  }
  
  displayCharacters = () => {
    return this.state.characters.map( character => {
      return(
        <Card image={character.imageLink}>
          <Card.Content as='h1' header={character.name} />
          <Image centered src={'https://api.got.show' + character.imageLink}/>
        </Card>  
      )
    });
  }

  render() {
    if (this.state.loaded)
      return (
        <Segment basic>
          <Header as='h1' textAlign='center'>GOT Characters</Header>
          <Card.Group stackable textAlign='center' itemsPerRow={4}>
            { this.displayCharacters() }
          </Card.Group>
        </Segment>
      )
    else
      return (
        <Dimmer active>
          <Loader>Loading Characters...</Loader>  
        </Dimmer>
      )  
  }
};

export default Characters;