import React, { useState } from 'react';
import './App.css';
import LaunchList from './components/LaunchList'
import LaunchProfile from './components/LaunchProfile'

function App() {
  const [missinId, setmissinId] = useState<number>(1)
  const onChangeHandler = (id: number) => {
    setmissinId(id)
  }
  return (
    <div className="App">
      <LaunchList onChangeHandler={onChangeHandler} />
      <LaunchProfile />
      <h1>hello world</h1>
    </div>
  );
}

export default App;
