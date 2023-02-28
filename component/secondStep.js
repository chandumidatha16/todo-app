
import {useContext}from "react";
import { multiStepContext } from "./stepContext";
import{Button,TextField}from "@mui/material"
export default function SecondStep(){
    const {setStep,userData,setUserData}=useContext(multiStepContext);
    return(
        <div>
              <div>
                <TextField label="state"required="required" value={userData["state"]} onChange={(e)=>setUserData({...userData,"state":e.target.value})}/>
              </div>
              <div>
                <TextField label="district"required="required" value={userData["district"]} onChange={(e)=>setUserData({...userData,"district":e.target.value})}/>
              </div>
              <div>
                <TextField label="village"required="required"value={userData["village"]} onChange={(e)=>setUserData({...userData,"village":e.target.value})} />
              </div>
               
              
              <div>
                <Button onClick={()=>setStep(1)}>Back</Button>
              </div>
              <div>
                <Button onClick={()=>setStep(3)}>Next</Button>
              </div>
        </div>
        
    )
}