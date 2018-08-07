import React from 'react';
import PropTypes from 'prop-types';

class Winner extends React.PureComponent {
  render() {
    const {winner} = this.props;

    return <div className="winner">
      Winner is {winner}!
    </div>;
  }
}

Winner.propTypes = {
  winner: PropTypes.string.isRequired
};

export default Winner;