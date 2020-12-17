import React from 'react'
import Navbar from './components/navbar'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Stores from './pages/Stores'
import AllStores from './pages/AllStores'
import {Switch,Route,BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Stores" component={Stores} />
          <Route path="/AllStores" component={AllStores} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
