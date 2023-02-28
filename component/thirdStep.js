
import { TextField,Button } from "@mui/material";
import{useContext}from "react";
import { multiStepContext } from "./stepContext";
export default function ThirdStep(){
    const {setStep,userData,setUserData,submitData}=useContext(multiStepContext);
    return(
        
                   <div>
                   
                   <TextField label="adharcard"required="required"value={userData["adharCard"]}onChange={(e)=>setUserData({...userData,"adharCard":e.target.value})}/>
                   <br></br>
                   
                   <TextField label="blood group"required="required"value={userData["BloodGroup"]}onChange={(e)=>setUserData({...userData,"bloodGroup":e.target.value})}/>
                   <br>
                   </br>
                   
                   <TextField label="tenth percentage"required="required"value={userData["tenthPercentage"]}onChange={(e)=>setUserData({...userData,"tenthPercentage":e.target.value})}/>
                   <br></br>
                   
                   <TextField label="degree percentage"required="required"value={userData["degreePercentage"]}onChange={(e)=>setUserData({...userData,"degreePercentage":e.target.value})}/>
                   <br>
                   </br>
                   
                   <TextField label="pg percentage"required="required"value={userData["pgPercentage"]}onChange={(e)=>setUserData({...userData,"pgPercentage":e.target.value})}/>
                   <br></br>
                   <Button onClick={()=>setStep(2)}>back</Button>
                   <Button onClick={submitData}>submit</Button>

            
                   </div>

    )
}