import PropTypes from 'prop-types';

export const HitSlopPropTypes = PropTypes.shape({
  top: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
});

export const HitSlopMapPropTypes = PropTypes.shape({
  leftArrow: HitSlopPropTypes,
  rightArrow: HitSlopPropTypes,
});
