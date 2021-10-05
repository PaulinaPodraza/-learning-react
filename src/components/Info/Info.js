import React from 'react';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero';
import { infoData } from '../../data/dataStore';

class Info extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
  }

  render() {
    return (
      <Container>
        <Hero titleText={infoData.title} image={infoData.image} />
        <p>{ infoData.description }</p>
      </Container>
    );
  }
}
export default Info;