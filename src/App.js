import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";
import {originals,action,romance,comedy,documenteries } from './urls'


function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Original'/>
      <Rowpost url={action} title='Action' isSmall={true}/>
      <Rowpost url={romance} title='Romance' isSmall={true} />
      <Rowpost url={comedy} title='Comedy' isSmall={true} />
      <Rowpost url={documenteries} title='Documentaries' isSmall={true} />
    </div>

  );
}

export default App;
