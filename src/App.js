import Form from './components/Form';
import Items from './components/Items';

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-2xl rounded-lg p-[2rem] flex flex-col gap-[15px]">
        <h1 className="text-3xl font-medium text-center">Grocery Bud</h1>
        <Form />
        <Items />
      </div>
    </div>
  );
}

export default App;
