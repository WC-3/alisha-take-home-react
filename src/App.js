import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header.jsx'
import View from './components/View.jsx'
import axios from 'axios'

function App() {

  const [data, setData] = useState()

  useEffect(() => {
    axios.get('/personnel')
    .then(res => console.log(res))
    .catch(err => console.error(err))
  }, [])

  return (
    // contains global styles / modes
    <div className="App">
      {/* // contains page positioning with grid and flexbox */}
      <div className="layout" style={{border: "3px solid red"}}>
          <Header />
          <View data={data} setData={setData}/>
        </div>
    </div>
  );
}

export default App;
