import './App.css';
import SidorenkoOptimizedList from './components/SidorenkoOptimizedList';

function App() {
  return (
    <div className="App">
      {/* <h1>Large Table Project</h1> */}
      {/* <VirtualTable data={makeTableData(10, 10000)} rowHeight={50} visibleRows={3} /> */}
      <h1>Optimized List</h1>
      <SidorenkoOptimizedList />
    </div>
  );
}

export default App;
