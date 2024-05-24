import React from 'react';

const CustomButton = ({label, style, onclick}) => {
  return (
    <div className="px-5 lg:ml-11">
      <button className="bg-red-600 text-sm py-2 px-5 font-bold rounded-md text-white mb-10"  style={style}>
     
      {label}
      </button>
    </div>
  );
};

export default CustomButton;