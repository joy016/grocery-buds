import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

const Items = () => {
  return (
    <div className="flex gap-[5px] items-center">
      <input type="checkbox" />
      <p>Items added here</p>
      <MdEdit />
      <MdDelete />
    </div>
  );
};

export default Items;
