import React from 'react';
import Select from 'react-select';
import './editor.scss';

const CustomSelect = ({ options, selected, handleChange, isLoading }) => {
  return (
    <Select
      options={options}
      value={options.find(option => option.value === selected)}
      onChange={handleChange}
      isLoading={isLoading}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? 'grey' : 'grey',
          marginBottom: '24px'
        }),
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: '#deebff',
          primary: '#4d9aff',
        },
      })}
      className='cocopopup-custom-selector'
    />
  );
};

export default CustomSelect;