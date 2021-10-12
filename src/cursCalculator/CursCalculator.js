import './Calculator.css';
import React from 'react'


class Calculator extends React.Component {
  constructor(props){
    super(props)
this.state={
  
    result: 0
}

  }


  static getDerivedStateFromProps(props,state){
      return {rate:props.rate}
  }

  calcRate=(e) => {
      e.preventDefault()
      console.log("work")
      let elements=e.target.elements
      console.log(elements)
      console.log(elements["count-Currency"].value)
      console.log(elements["type-Currency"].value)
      let countCurrency=elements["count-Currency"].value
      let typeCurrency=elements["type-Currency"].value
      this.setState({result : (countCurrency /this.state.rate[typeCurrency])})
  }
 
  render(){

    return (
      <div >
        
   
        <section className="CalculatorSection"> 
        <div className="wrapper">
          
          <div className="calculator">
           
           <h3> Calculator pentru Curs Valutar </h3>
           <div> Eu Vreau</div>
           


                <div>
                    <form onSubmit={this.calcRate}>
                    <input type="number" defaultValue="150" name="count-Currency"/>

                    <select  name="type-Currency" id="">
                     
                      {Object.keys(this.props.rate).map((keyName,i)=>
            (
              <option key={keyName} value={keyName}  >{keyName}</option>
             
   
            )
            )}

                    </select>
                    <input type="submit" defaultValue="calc"/>
                    </form>

                    </div>


                    <div> 
                        <h4>Rezultat</h4>
                        <ul>
                            <li>EUR {this.state.result}</li>
                         
                           
                        </ul>
                    </div>
            
          </div>
        </div>
    </section>
        
   </div>
    );
  }


  }
 

export default Calculator;