import React from 'react';
import Header from './components/Header';
import FiltersPanel from './components/FiltersPanel';
import Table from './components/Table';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <FiltersPanel />
        <Table />
        <Footer />
      </header>
    </div>
  );
}

export default App;
