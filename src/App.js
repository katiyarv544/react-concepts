import React from "react";
import './App.css';
import Header from './components/Header'
import Cheader from './components/Cheader'
import Channel from './components/Channel'

//function App() {
  class App extends React.Component{
    render(){
  return (
    <div className="App">
      <Header name="vikash" last="katiyar">
      <p>vikash ia good boy</p>
      </Header>
      <Header name="vikash1" last="katiyar1"/>
      <Header name="vikash2" last="katiyar2"/>
      <Cheader name="Ravi" />
      <Channel />
    </div>
  );
 }
}

export default App;
