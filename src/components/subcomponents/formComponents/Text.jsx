import React from 'react';

const Text = ({ name, type, onChange, value, placeHolder }) => {
  return (
    <input
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeHolder}
    />
  );
};

export default Text;
