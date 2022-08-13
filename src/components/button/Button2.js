import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classNames';

const Button = ({
  type = 'button',
  children,
  className = '',
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );
  return (
    <button
      className={classNames(
        'flex items-center justify-center p-4 text-base font-semibold rounded-xl text-white',
        !!isLoading ? 'opacity-50 pointer-events-none' : '',
        className,
      )}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};
export default Button;
