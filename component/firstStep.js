
import {useContext}from "react";
import{Button,TextField}from "@mui/material"
import { multiStepContext } from "./stepContext";
export default function FirstStep(){
    const {setStep,userData,setUserData}=useContext(multiStepContext);
    return(
        <div className="formStyle">
              <div>
             
              <TextField label="firstName"required="required" type="text"  value={userData["firstName"]} onChange={(e)=>setUserData({...userData,"firstName":e.target.value})}/>
              </div>
               
               <div>
               <TextField label="lastName"required="required" value={userData["lastName"]}onChange={(e)=>setUserData({...userData,"lastName":e.target.value})}/>
              </div>
              <div>
               <TextField label="fatherName"required="required" value={userData["fatherName"]} onChange={(e)=>setUserData({...userData,"fatherName":e.target.value})}/>
               </div>
               <div>
               <TextField label="phoneNumber"required="required" value={userData["phoneNumber"]} onChange={(e)=>setUserData({...userData,"phoneNumber":e.target.value})}/>
               </div>
               <div>
               <TextField label="email" required="required"value={userData["email"]} onChange={(e)=>setUserData({...userData,"email":e.target.value})}/>
               </div>
               <div>
               <Button onClick={()=>setStep(2)}>Next</Button>
               </div>
               </div>
           )
}