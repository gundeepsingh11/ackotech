import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../../lib/withStyles';
import styles from './SlickSlide.style';
import Slider from 'react-slick';
import Settings from '../../../config/CarouselSettings.config';

class SlickSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { slider } = this.props;
    const viewArray = slider.map(item => {
      return (
        <div>
          <img src={item.src} />
        </div>
      );
    });

    return <Slider {...Settings}>{viewArray}</Slider>;
  }
}

SlickSlide.propTypes = {};

SlickSlide.defaultProps = {};

export default withStyles(SlickSlide, styles);

export { SlickSlide as SlickSlideVanilla };
