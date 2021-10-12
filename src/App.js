
import './App.css';
import React from 'react'
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import CursSection from './CursSection/CursSection';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from './About/About';


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <div >

        <Header />

        <Router>
          <Switch>
            <Route exact path="/" component={CursSection} />
            <Route exact path="/About" component={About} />
          </Switch>
        </Router>


        <Footer />
        blab

      </div>
    );
  }


}


export default App;
