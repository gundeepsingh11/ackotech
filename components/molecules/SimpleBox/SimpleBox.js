import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../../lib/withStyles';
import styles from './SimpleBox.style';

const SimpleBox = props => {
  return (
    <div
      key={props.icon}
      className={`single-box col-md-4 col-xs ${props.className}`}>
      <div className="box-container">
        <span className={`icon-${props.icon}`} />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

SimpleBox.propTypes = {};

SimpleBox.defaultProps = {};

export default withStyles(SimpleBox, styles);

export { SimpleBox as SimpleBoxVanilla };
