import './Header.css';
import React from 'react'
import Nav from "../Nav/Nav"

class Header extends React.Component {
  constructor(props){
    super(props)
  }
  render(){

    return (
      <div >
        
    <header>
        <div className="wrapper">
            <div className="logo">
            <h1>CURS VALUTAR POJECT</h1>
            </div>
            <Nav />
        </div>
    </header>
   </div>
    );
  }


  }
 

export default Header;