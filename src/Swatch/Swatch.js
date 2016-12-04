import React, { PropTypes } from 'react';

const styles = {
  wrapper: {
    width: '20px',
    height: '20px',
    padding: '5px',
    background: '#fff',
    borderRadius: '1px',
    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
    display: 'inline-block',
    cursor: 'pointer',
  },
  swatch: {
    width: '100%',
    height: '100%',
  },
};

/**
 * Swatch Component
 */
const Swatch = (props) => {
  const { color, size, onClick } = props;

  return (
    <div
      style={{
        ...styles.wrapper,
        ...{width: `${size || 20}px`},
        ...{height: `${size || 20}px`},
      }}
      onClick={onClick}
    >
      <div
        style={{
          ...{backgroundColor: color},
          ...styles.swatch,
        }}
      />
    </div>
  );
};

Swatch.propTypes = {
  /**
   * Swatch color to display
   */
  color: PropTypes.string,
  /**
   * Callback function fired when the element is clicked.
   */
  onClick: PropTypes.func,
  /**
   * Swatch size in px
   */
  size: PropTypes.number,
};

export default Swatch;
