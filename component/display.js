
import {useContext}from "react";
import{Table,TableRow,TableBody,TableHead,TableCell}from "@mui/material"
import{ multiStepContext } from "./stepContext";
export default function DisplayData(){
    const {finalData}=useContext(multiStepContext);
    
                        
    
    return(
        // {
        //                    setStep===3 ?(
        //                         <Typography variant="h1">thank you for filling form</Typography>
        //                  ):()

        <div>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>firstName</TableCell>
                    <TableCell>lastName</TableCell>
                    <TableCell>fatherName</TableCell>
                    <TableCell>phoneNumber</TableCell>
                    <TableCell>email</TableCell>
                    <TableCell>state</TableCell>
                    <TableCell>district</TableCell>
                    <TableCell>village</TableCell>
                    
                    <TableCell>adharcard</TableCell>
                    <TableCell>bloodgroup</TableCell>
                    <TableCell>tenthpercentage</TableCell>
                    <TableCell>degreepercentage</TableCell>
                    <TableCell>pgpercentage</TableCell>
                </TableRow>
                </TableHead>
                <TableBody> {finalData.map((contact)=>(
                   
                    <TableRow>
                        <TableCell> {contact.firstName}</TableCell>
                        <TableCell>{contact.lastName}</TableCell>
                        <TableCell>{contact.fatherName}</TableCell>                      
                        <TableCell>{contact.phoneNumber}</TableCell>
                        <TableCell>{contact.email}</TableCell>
                        <TableCell>{contact.state}</TableCell>
                        <TableCell>{contact.district}</TableCell>
                        <TableCell>{contact.village}</TableCell>
                        
                        <TableCell>{contact.adharCard}</TableCell>
                        <TableCell>{contact.bloodGroup}</TableCell>
                      <TableCell>{contact.tenthPercentage}</TableCell>
                      <TableCell>{contact.degreePercentage}</TableCell>
                      <TableCell>{contact.pgPercentage}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
    )
}