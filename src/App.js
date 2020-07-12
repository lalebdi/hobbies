import React from 'react';
import './App.css';
import Hobbies from './component/Hobbies.jsx'
import hobbies from "./hobbies";

function App() {
  return (
    <div>
      <h1 className="heading">My Hobbies</h1>
      <Hobbies
        name={hobbies[0].name}
        img={hobbies[0].img}
        description={hobbies[0].description}
      />
      <Hobbies
        name={hobbies[1].name}
        img={hobbies[1].img}
        description={hobbies[1].description}
      />
      <Hobbies
        name={hobbies[2].name}
        img={hobbies[2].img}
        description={hobbies[2].description}
      />
    </div>
  );
}

export default App;
