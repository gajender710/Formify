import React, { useState } from 'react'
import GlobalLayout from '../componentts/GlobalLayout'
import HeadingBanner from '../componentts/HeadingBanner'
import {collection , addDoc} from "firebase/firestore"
import { db } from '../firebase-config'
const FormScreen = () => {
 
 
/*  checks start*/
const[isNameValid,nameValid] = useState(true);
const[isEmailValid,emailValid] = useState(true);
const[isMobileValid,mobileValid] = useState(true);
let ch = true; 
const[isSelected,setSelected] = useState(true);
const[allValid,setAllValid] = useState(false);
/* checks end */

 const[name,setName] = useState("");
 const[mobile,setMobile] = useState("");
 const[email,setEmail] = useState("");
 const[choice,setChoice] = useState();
 const[reason,setReason] = useState("");

 
 const userReference = collection(db,"user");

 const validation =()=>{
   console.log("88888888888888888888 n");
   let regexMobile = /^[0]?[789]\d{9}$/;
   let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   if(name == "") { nameValid(false); return false;}
   nameValid(true);

   if(!regexMobile.test(mobile)) {mobileValid(false); return false;}
   mobileValid(true);

   if(!email.match(regexEmail)) { emailValid(false); return false;}
   emailValid(true);

   if(choice == undefined) {setSelected(false); return false;}
   setSelected(true);

    
   return true; 
 }

 const choiceHandleer = (event)=>{
   setChoice(event.target.value);
   if(event.target.value == "Yes")setReason("");
   console.log(choice);
 }

 const reasonBox = () =>{
   return (
      <div className='LoginRegisterBoxInner' style={{width:'100%'}}>
         <input placeholder='Can you please mention the reason' style={{borderStyle:'none'}}
            onChange={(event)=>setReason(event.target.value) }
         />
      </div>
   )
 }

 const submitFeedback= async() =>{

   if(validation()){
   await addDoc(userReference,{email : email,  mobile:mobile , name:name ,choice : choice , reason: reason});
   alert("Submission Successful")
   }
}
  return (
    <GlobalLayout heading ="Dashboard">
      <HeadingBanner text={"Feedback Form"} headerNav = {"Dashboard"} to = {"/LoginRegisterScreen"}/> 
         <div className='formBox'>
            <p className='inputLabel'>Name</p>
            <input className="input" placeholder='Enter Name'  onChange={e=>setName(e.target.value)}/>
            {isNameValid ? null: <label>Name cannot be empty.</label>}
            
            <p className='inputLabel'>Mobile</p>
            <input className="input"  placeholder='Enter Mobile Number'  onChange={e=>setMobile(e.target.value)}/>
            {isMobileValid ?null: <label>Invalid mobile number.</label>}
            
            <p className='inputLabel' >Email Adress</p>
            <input className="input"  placeholder='Enter Email Address'  onChange={e=>setEmail(e.target.value)}/>
            {isEmailValid ? null: <label>Invalid email</label>}

            
            <p className='inputLabel'>Would you like to stay on our mailing list ?</p>
            <div className='radioBox'>
               <div className='radioBoxInner'>
                  <p style={{paddingRight:"10px", paddingTop:"9px"}}>Yes</p> 
                  <input  type={'radio'} name="choice" value={"Yes"} onChange={choiceHandleer}/>
               </div>
               <div className='radioBoxInner'>
                  <p style={{paddingRight:"10px", paddingTop:"9px"}} >No</p> 
                  <input  type={'radio'} name="choice" value={"No"}  onChange={choiceHandleer} />
               </div>
            </div>
            {choice=="No" ?  reasonBox(): null}
            {/* {choice? <p>selected</p> :<p>please select</p>} */}
            {isSelected ? null: <label>Please select</label>}            
            <footer>
                <button className='button' onClick={submitFeedback}>Submit</button>
            </footer>
            
         </div>
         
         
      </GlobalLayout>
  )
}

export default FormScreen