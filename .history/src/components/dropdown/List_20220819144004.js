import React from 'react';
import { useDropdown } from './dropdown-context';

const List = ({ children, space = '', className = '' }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div
          className={`absolute top-full right-[2px] w-full shadow-lg  ${
            space ? '' : 'mt-2 rounded-[10px]'
          } dark:bg-darkbg bg-white ${className}`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default List;
