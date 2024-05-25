import { useState } from 'react';
import Form from './components/Form';
import Items from './components/Items';

function App() {
  const [items, setITems] = useState([]);

  const addGrocery = (item) => {
    const newItemAdded = {
      grocery: item,
      hasCheck: false,
    };
    setITems([...items, newItemAdded]);
  };

  const deleteGrocery = (index) => {
    const itemFound = items.filter((_, i) => i !== index);
    setITems(itemFound);
  };

  const checkGrocery = (index) => {
    const newItems = [...items];
    newItems[index].hasCheck = !newItems[index].hasCheck;
    setITems(newItems);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-2xl rounded-lg p-[2rem] flex flex-col gap-[15px]">
        <h1 className="text-3xl font-medium text-center">Grocery Bud</h1>
        <Form addItem={addGrocery} />
        <Items
          items={items}
          deleteGrocery={deleteGrocery}
          checkGrocery={checkGrocery}
        />
      </div>
    </div>
  );
}

export default App;
