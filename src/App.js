import React from 'react'
import Header from './components/common/headings/Header'
import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Myhome from './components/myhome/Myhome';

const App = () => {
  return (
    <div>
     
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Myhome} />
            
        </Switch>
      </Router>
    </div>
  )
}

export default App
