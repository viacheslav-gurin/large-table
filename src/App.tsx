import './App.css';
import VirtualTable from './components/VirtualTable';
import { makeTableData } from './lib/makeTableData';

function App() {
  return (
    <div className="App">
      <h1>Large Table Project</h1>
      <VirtualTable data={makeTableData(10, 10000)} rowHeight={50} visibleRows={3} />
    </div>
  );
}

export default App;
