//import logo from './logo.svg';
import {useContext}from "react";
import FirstStep from"./component/firstStep";
import SecondStep from"./component/secondStep";
import ThirdStep from"./component/thirdStep";
import{Stepper,StepLabel,Step}from"@mui/material";
import{multiStepContext}from "./component/stepContext";
import DisplayData from"./component/display";

import './App.css';

 

function App() {
  console.log(multiStepContext);
  const {currentStep,finalData}=useContext(multiStepContext);
  function showStep(step){
    switch(step){
      case 1:
        return<FirstStep/>
      case 2:
        return<SecondStep/>
        case 3:
          return<ThirdStep/>
    
      default:return "unknownStep";
    }
   
    
  }
  
  return (
    <div className="App">
      
      <Stepper activeStep={currentStep-1}>
        <Step>
          <StepLabel>Personal Details</StepLabel>
        </Step>
        <Step>
          <StepLabel>Address Part</StepLabel>
        </Step>
        <Step>
          <StepLabel>educational details  </StepLabel>
          
        </Step>
        
        
        
      </Stepper>
      
      
      {showStep(currentStep)}
      <br></br>
      {finalData.length>0?<DisplayData/>:""}
          
        
      
      
    
    
    
    

       
      
      </div>
      
      
    
  );
}

export default App;
