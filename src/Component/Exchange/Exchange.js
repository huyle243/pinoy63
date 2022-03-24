import React, { Component } from "react";
//import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import './Exch.css'
import CurrencyFormat from 'react-currency-format';
const PESOtoVND = function (props) {
  const convert = function (peso) {
    return peso * 482;
  };
  return (
    <div>
      <span>PESO</span>
      
      <input placeholder="Fill in amount Peso..."
        onChange={(e) => {
          const peso = e.target.value;
          const vnd = convert(peso);
          props.onHandleChange({
            peso,
            vnd,
          });
        }}
        value={props.value}
      />
    </div>
  );
};
const VNDtoPESO = function (props) {
  const convert = function (vnd) {
    return vnd / 475;
  };
  return (
    <div>
      <span>VND </span>
      <input
          placeholder="Or fill in amount VND..."
        onChange={(e) => {
          const vnd = e.target.value;
          const peso = convert(vnd);
          props.onHandleChange({
            peso,
            vnd,
          });
        }}
        value={props.value}
      />
    </div>
  );
};
 
export default class Exchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usd: 0,
      vnd: 0,
    };
  }
  handleChange = (data) => {
    this.setState(data);
  };
 
  render() {
    return (
      <div style={{margin: "3%"}}>
        <Card className="text-center">
  <Card.Header ><h6>Calculator</h6></Card.Header>
  <Card.Body>
  <PESOtoVND onHandleChange={this.handleChange} value={this.state.peso} />
              <VNDtoPESO onHandleChange={this.handleChange} value={this.state.vnd} />
  </Card.Body>
  
</Card>

        <Card>
             

      
        </Card>
        
      
       
      </div>  
    );
  }
}