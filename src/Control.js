import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import React from 'react';

export default class Control extends React.Component {
  static propTypes = {
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
  }

  static defaultProps = {
    value: '',
  }

  render() {
    const {
      forID,
      value,
      classNameWrapper,
    } = this.props;

    return (
      <input
        type="text"
        className={classNameWrapper}
        id={forID} 
        value={value || uuidv4()}
        disabled
      />
    );
  }
}