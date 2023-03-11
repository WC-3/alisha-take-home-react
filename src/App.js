import React from 'react';
import './App.css';
import Header from './components/Header.jsx'
import View from './components/View.jsx'

function App() {
  return (
    // contains global styles / modes
    <div className="App">
      {/* // contains page positioning with grid and flexbox */}
      <div className="layout" style={{border: "3px solid red"}}>
          <Header />
          <View />
        </div>
    </div>
  );
}

export default App;
