import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';

const Items = ({ items, deleteGrocery, checkGrocery }) => {
  console.log(items.hasCheck);
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="flex flex-row justify-between">
          <div className="flex gap-[5px]">
            <input
              type="checkbox"
              checked={item.hasCheck}
              onChange={() => checkGrocery(index)}
            />
            <p
              style={{
                textDecoration: item.hasCheck ? 'line-through' : 'none',
              }}
            >
              {item.grocery}
            </p>
          </div>

          <MdDelete onClick={() => deleteGrocery(index)} />
        </div>
      ))}
    </>
  );
};

export default Items;
