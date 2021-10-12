import './Nav.css';
import React from 'react'

class Nav extends React.Component {
  constructor(props){
    super(props)
  }
  render(){

    return (
      <div >
        
   
            <div className="nav">
                <ul>
                    <li> <a href="/">Main</a> </li>
                    <li><a href="#">Change Points</a></li>
                    <li><a href="/About">Contacts</a></li>
                </ul>
            </div>
        
   </div>
    );
  }


  }
 

export default Nav;