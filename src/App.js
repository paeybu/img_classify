import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import PredictState from './context/predict/PredictState'
import PredictColor from './pages/PredictColor'
import PredictGeneral from './pages/PredictGeneral'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

const App = () => {
  useEffect(() => {
    M.AutoInit()

    // eslint-disable-next-line
  }, [])
  return (
    <PredictState>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/color" component={PredictColor}></Route>
            <Route exact path="/general" component={PredictGeneral}></Route>
          </Switch>
        </div>
      </Router>
    </PredictState>
  )
}

export default App
