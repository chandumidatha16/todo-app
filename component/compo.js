
import {useState}from "react";
 
const Compo=({contact})=>{
    const[contacts,setContacts]=useState([]);
const[addFormData,setAddFormData]=useState({
  firstName:"",
  lastName:"",
  fatherName:"",
  phoneNumber:"",
  email:"",
  gender:"",
  languagesKnown:"",
  introduceyourexperience:"",
  adharCard:"",
  bloodGroup:"",
  tenthpercentage:"",
  interpercentage:"",
  degreepercentage:"",
  pgpercentage:"",
})
const handleFormChange=(event)=>{
    event.preventDefault();
    const fieldName=event.target.getAttribute("name");
    const fieldValue=event.target.value;
    const newFormData={...addFormData};
   newFormData[fieldName]=fieldValue;
  setAddFormData(newFormData);
}
const handleAddFormSubmit=(event)=>{
  event.preventDefault();
  const newContact={
    firstName:addFormData.firstName,
    lastName:addFormData.lastName,
    fatherName:addFormData.fatherName,
    phoneNumber:addFormData.phoneNumber,
    email:addFormData.email,
    gender:addFormData.gender,
    languagesKnown:addFormData.languagesKnown,
    introduceyourexperience:addFormData.introduceyourexperience,
    adharCard:addFormData.adharCard,
    bloodGroup:addFormData.bloodGroup,
    tenthpercentage:addFormData.tenthpercentage,
    interpercentage:addFormData.interpercentage,
    degreepercentage:addFormData.degreepercentage,
    pgpercentage:addFormData.pgpercentage

  };
  const newContacts=[...contacts,newContact];
  setContacts(newContacts);
                           
};

  return(
      
      
           <div>
            
            {contacts.map((contact)=>(
              contact={contact}
            ))}
            

            
            {contact.firstName}
           {contact.lastName}
           {contact.fatherName}
           {contact.phoneNumber}
           {contact.email}
           {contact.gender}
           {contact.languagesKnown}
           {contact.softwareRole}
           {contact.introduceYourSelf}
           {contact.adharCard}
           {contact.bloodGroup}
           {contact.tenthPercentage}
           {contact.degreePercentage}
           {contact.pgPercentage}
            

            </div>
  )

}
export default Compo;
