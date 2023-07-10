// import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Header from './components/Header'

const App = () => (
  <div className="main">
    <div className="main-border">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
