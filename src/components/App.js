import React, { useState } from "react";
import KeyPadComponent from "./KeyPad";
import OutputBox from "./OutputBox";
import "./styles.css";
import {evaluate} from 'mathjs';


const styles = {
  container: {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    background:'linear-gradient(to bottom left,#403B4A,#003973)',
    fontSize: "16px",
    width:"100vw",
    height:"100vh",

  },
  calculator:{
    maxWidth:"45%",
    padding:"0.1em",
    // outline: "1px solid #fff",
    border:'1px solid white',
    borderRadius: "5px",
  },
  title:{
    color:"white",
  }
}

const App = () => {

  const [result, setResult] = useState("");
  

  const handleClick = (keyValue)=>{
    console.log(keyValue)
    if (keyValue === "=") {
      calculate()
    }

    else if (keyValue === "C") {
      reset()
    }
    else if (keyValue === "CE") {
      backspace()
    }

    else {
      const currentResult = result + keyValue;
      setResult(currentResult);
    }

  }

  const calculate = ()=>{
    let currentValue = result;

    if (currentValue.includes('--')) {
      currentValue = currentValue.replace('--', '+')
    }

    try {
      let newResult = (evaluate(currentValue) || "") + "";
      setResult(newResult);
    } catch (e) {
      setResult("error ");
    }
  }

  const reset = () =>{
    setResult("");
  }

  const backspace = () =>{
    const updatedValue = result.slice(0,-1);
    setResult(updatedValue); 
  }


  return (
    <div style={styles.container}>
      <div style={styles.calculator}>
        <OutputBox>
            {result}
        </OutputBox>
        <KeyPadComponent handleClick ={handleClick}/>
      </div> 
    </div>
  );
}

export default App;
