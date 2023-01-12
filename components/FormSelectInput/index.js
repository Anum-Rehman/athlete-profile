import React from 'react';
import ReactSelect from 'react-select';

const FormSelectInput = ({ options, className, value, placeholder, beforeLabel, label, error, onChange }) => {
  let onChanged = onChange || (() => true);
  const colourStyles = {
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused
          ? 'rgba(255,90,179,1) !important'
          : undefined,
        color: isFocused ? 'white' : undefined,
      };
    },
  };

  return (
    <div className={className}>
      {beforeLabel && (
        <label className='text-input__before'>{beforeLabel}</label>
      )}

      <ReactSelect
        className={`select-input__container`}
        options={options}
        value={value}
        placeholder={placeholder}
        classNamePrefix='select-input'
        styles={colourStyles}
        onChange={(e) => onChanged(e)}
      />
      {label && <label className='text-input__label'>{label}</label>}
      {error && <label className='text-input__label-error'>{error}</label>}
    </div>
  );
};

export default FormSelectInput;