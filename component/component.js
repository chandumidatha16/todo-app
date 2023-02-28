// import {Button,Typography,Stepper,Step,StepLabel } from "@mui/material";
// // import Compo from"./compo";

// import {useState} from "react";
// function getSteps(){
//     return[
//         "primary information",
//         "secondary informarion",
//         "educational percentages"
//     ];
// }
// function getStepContent(step){switch(step){
//     case 0:
//   return(
//       <>
//       <label>firstName:</label>
//       <input type="text" placeholder="firstName" required="required"name="firstName"value={contacts["firstName"]}onChange={(e)=>setContacts({...contacts,"firstName":e.target.value})}/>
      
//       <br></br>
//       <label>lastName:</label>
//       <input type="text" placeholder="lastName"required="required"name="lastName"value={contacts["lastName"]}onChange={(e)=>setContacts({...contacts,"lastName":e.target.value})}/>
//       < br></br>
//       <label>fatherName:</label>
//       <input type="text" placeholder="father's name"required="required"name="fatherName"value={contacts["fatherName"]}onChange={(e)=>setContacts({...contacts,"fatherName":e.target.value})}/>
//       <br></br>
//       <label>phoneNumber:</label>
//       <input type="number" placeholder="enter mobile Number"required="required"name="phoneNumber"value={contacts["phoneNumber"]}onChange={(e)=>setContacts({...contacts,"phoneNumber":e.target.value})}/>
//       <br></br>
//       <label>Email:</label>
//       <input type="email" placeholder="email please"required="required"name="email"value={contacts["email"]}onChange={(e)=>setContacts({...contacts,"email":e.target.value})}/>
//       </>
//   )
// case 1:
//   return(
//       <>
//       <label>state</label>
//       <input type="text" required="required"value={contacts["state"]}onChange={(e)=>setContacts({...contacts,"state":e.target.value})}/>
//       <br></br>
//        <label></label>
//       <input type="text"   required="required"value={contacts["district"]}onChange={(e)=>setContacts({...contacts,"district":e.target.value})}/>
//       <br></br>
//       <label>village</label>
//       <input type="text" required="required"value={contacts["village"]}onChange={(e)=>setContacts({...contacts,"village":e.target.value})} />
      
//       <br></br>
      
//       <label>introduce your experience</label>
//       <input type="textarea" required="required"value={contacts["introduceyourexperience"]}onChange={(e)=>setContacts({...contacts,"introduceyourexperience":e.target.value})}/>
//       <br></br>
//       </>

//   )
// case 2:
//   return(
//       <>
//       <label>adhar card:</label>
//       <input type="number" required="required"name="adharcard"value={contacts["adharCard"]}onChange={(e)=>setContacts({...contacts,"adharCard":e.target.value})}/>
//       <br></br>
//       <label>blood group:</label>
//       <input type="text" required="required"name="bloodgroup"value={contacts["BloodGroup"]}onChange={(e)=>setContacts({...contacts,"bloodGroup":e.target.value})}/>
//       <br>
//       </br>
//       <label>tenth percentage:</label>
//       <input type="number"required="required"name="tenthpercentage"value={contacts["tenthPercentage"]}onChange={(e)=>setContacts({...contacts,"tenthPercentage":e.target.value})}/>
//       <br></br>
//       <label>degree percentage:</label>
//       <input type="number"required="required"name="degreepercentage"value={contacts["degreePercentage"]}onChange={(e)=>setContacts({...contacts,"degreePercentage":e.target.value})}/>
//       <br>
//       </br>
//       <label>pg percentage:</label>
//       <input type="number"name="pgpercentage"value={contacts["pgPercentage"]}onChange={(e)=>setContacts({...contacts,"email":e.target.value})}/>

//       </>
//   )
//   default:return "unknown step";

// }
// }
    
    
// const LinearStepper=()=>{
//     const[contacts,setContacts]=useState([]);
//     const[addFormData,setAddFormData]=useState([]);
//     const[activeStep,setActiveStep]=useState(0);
    
//     const steps=getSteps();
//     const handleNext=()=>{
//         setActiveStep(activeStep+1);

//     };
//     const handleBack=()=>{
//         setActiveStep(activeStep-1);
//     };
    
  


// const handleAddFormSubmit=(event)=>{
//   event.preventDefault();
//   setAddFormData(addFormData=>[...addFormData,contacts]);
//   setContacts("");
// }

    
//     return(
//         <>
//             <Stepper activeStep={activeStep}>
//                { steps.map((step,index)=>{
//                     return(
//                         <Step>
//                         <StepLabel>{step}</StepLabel>
                        
//                          </Step>

//                     );
//                 })}
                

            

//             </Stepper>
            
           
//             {
//                 activeStep===3 ?(
//                     <Typography variant="h1">thank you for filling form</Typography>
//                 ):(
//             <>
//             <form onSubmit={handleAddFormSubmit}>{
                
//             <button variant="contained"
//             onClick={handleBack}
//             disabled={activeStep===0}>back</button>
//             <button variant="contained"
//             onClick={handleNext}
            
//             >{activeStep===2?<input type="submit" value="save"/>:<input type="button"value="next"/>}</button>
            
//             </form>
            
//             </>
//                 )
// }
                
//           <>
          
//             <table>
//                 <thead>
//                 <tr>
              
//               <th>firstName</th>
//               <th>lastName</th>
//               <th>fatherName</th>
//               <th>phoneNumber</th>
//               <th>email</th>
//               <th>state</th>
//               <th>district</th>
//               <th>village</th>
//               <th>introduceYourSelf</th>
//               <th>adharCard</th>
//               <th>bloodGroup</th>
//               <th>tenthPercentage</th>
//               <th>degreePercentage</th>
//               <th>pgPercentagev</th>
             
               
//                </tr>
//             </thead>
//             <tbody> 

//               {
//               addFormData.map((contact)=>(
//                     <tr>
//                     <td> {contact.firstName}</td>
//                      <td>{contact.lastName}</td>
//                      <td>{contact.fatherName}</td>
//                      <td>{contact.phoneNumber}</td>
//                      <td>{contact.email}</td>
//                      <td>{contact.state}</td>
//                      <td>{contact.district}</td>
//                      <td>{contact.village}</td>
//                      <td>{contact.introduceyourexperience}</td>
//                      <td>{contact.adharCard}</td>
//                      <td>{contact.bloodGroup}</td>
//                      <td>{contact.tenthpercentage}</td>
//                      <td>{contact.degreepercentage}</td>
//                      <td>{contact.pgpercentage}</td>
                    
//           </tr>
//            ))}
//           </tbody>
//           </table>
//                </> 
            
              
            
            
            
//             </>
            
       

//     )
    
    

    
    
// }
// export default LinearStepper