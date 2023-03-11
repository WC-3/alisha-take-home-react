import React from 'react';
import './App.css';

function App() {
  return (
    // contains global styles / modes
    <div className="App">
      App
      {/* // contains page positioning with grid and flexbox */}
      <div className="layout" style={{border: "3px solid red"}}>
          Layout
          {/* start Header */}
            <div className="header" style={{border: "3px solid green"}}>
              Header
            </div>
          {/* end Header */}
          {/* start View */}
          <div className="view" style={{border: "3px solid purple"}}>
            View
            {/* start Add */}
            <div className="add" style={{border: "3px solid orange"}}>
              Add
            </div>
            {/* end Add */}
            {/* start List */}
            <div className="list" style={{border: "3px solid brown"}}>
              List
            </div>
            {/* end List */}
          </div>
          {/* end View */}
        </div>
    </div>
  );
}

export default App;
