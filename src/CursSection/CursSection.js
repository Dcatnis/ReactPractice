import './CursSection.css';
import React from 'react'
import Calculator from '../cursCalculator/CursCalculator';


class CursSection extends React.Component {
  constructor(props){
    super(props)
this.state={
  'date':'',
  'currencyRate': {}
}
this.currency=['USD','RUB','PHP','MDL'];
    this.getRate()
  }

  getRate=()=>{
    fetch('http://api.exchangeratesapi.io/v1/latest?access_key=bdde54648acae1e1017a767ff6a06094&format=1')
    .then(data=> {return data.json()})
    .then (data=>{
      console.log(data)
      this.setState({date:data.date})
      let result={} 
      for(let i=0;i<this.currency.length; i++){
        result[this.currency[i]]=data.rates[this.currency[i]]
      }
      console.log(result)
      this.setState({currencyRate:result}) 
    })
  }
  render(){

    return (
      <div >
        
   
        <section className="CursSection"> 
        <div className="wrapper">
          <h3>Cursul Valutar pentru data de: {this.state.date}</h3>
          <div className="cards">
            {Object.keys(this.state.currencyRate).map((keyName,i)=>
            (
              <div className="card" key={keyName}>
              <p>{keyName}</p>
              <p className="kr">{this.state.currencyRate[keyName].toFixed(2)}</p>
              <p className="kr">se cumpara cu 1 EUR</p>
          </div>
            )
            )}
            
            
          </div>
        </div>
    </section>
        <Calculator rate={this.state.currencyRate} />
   </div>
    );
  }


  }
 

export default CursSection;