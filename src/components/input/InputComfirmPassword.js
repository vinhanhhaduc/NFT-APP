import React from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorComponent from '../common/ErrorComponent';
const InputComfirmPassword = (props) => {
  const {
    control,
    name,
    type = 'text',
    error = '',
    placeholder = '',
    children,
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`w-full px-6 py-4 text-sm font-medium border rounded-xl autocomplete-off placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-transparent
          ${
            error.length > 0
              ? 'border-error'
              : 'text-black1 dark:border-[#35373E]'
          }
          ${children ? 'pr-16' : ''}
        )`}
        placeholder={error.length <= 0 ? props.placeholder : ''}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="absolute text-sm font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6 error-input">
          {error}
        </span>
      )}
      {children && (
        <span className="absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4">
          {children}
        </span>
      )}
    </div>
  );
};
InputComfirmPassword.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  control: PropTypes.any.isRequired,
};
export default withErrorBoundary(InputComfirmPassword, {
  // FallbackComponent: <ErrorComponent></ErrorComponent>,
  FallbackComponent: ErrorComponent,
});