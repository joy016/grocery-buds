import React from 'react';

const Form = () => {
  return (
    <form className="gap-[10px]">
      <input
        type="text"
        placeholder="Add Grocery Item"
        className="border border-solid border-[#C4D1EB] py-[10px] px-[5px] outline-none bg-white shadow-md mr-[10px] focus:bg-[#F2F2F2] focus:border focus:border-solid focus:border-[#5A7EC7] focus:rounded-[10px] transition ease duration-300"
      />
      <input
        type="submit"
        value="Submit"
        className="bg-[#A0DEFF] p-[10px] rounded-lg"
      />
    </form>
  );
};

export default Form;
