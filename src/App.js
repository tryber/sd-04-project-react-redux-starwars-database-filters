import React from 'react';
import { GlobalStyle } from './styles';
import Table from './components/Table';
import Header from './components/Header';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Table />
    </div>
  );
}

export default App;
