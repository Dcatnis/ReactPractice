import './Footer.css';
import React from 'react'
import Nav from "../Nav/Nav"

class Footer extends React.Component {
  constructor(props){
    super(props)
  }
  render(){

    return (
      <div >
        
   
        <footer>
        <div className="wrapper">
            <Nav />
            
        </div>
    </footer>
        
   </div>
    );
  }


  }
 

export default Footer;