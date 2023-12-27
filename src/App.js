
import './App.css';
import Header from './components/Header'
function App() {
  return (
    <div className="App">
      <Header name="vikash" last="katiyar">
      <p>vikash ia good boy</p>
      </Header>
      <Header name="vikash1" last="katiyar1"/>
      <Header name="vikash2" last="katiyar2"/>
    </div>
  );
}

export default App;
