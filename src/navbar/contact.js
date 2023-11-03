import React,{useState} from 'react'
import Bg from '../images/contact1.webp'

export default function contact() {
  return (
    <div style={{backgroundColor:'#e6e6e6'}}>
      ,
     <div style={{textAlign:'center',marginTop:'50px'}}>
      <h1>Contact Us</h1>
      <h4 style={{fontWeight:'normal'}}>Azithro Pharmacies Limited<br/>
        #19, Bishop Gardens,<br/>
        Raja Annamalaipuram,<br/>
        chennai,Tamil Nadu- 600028</h4>

       <h3 style={{margin:'50px'}}>Mail us at : care@Azithro.com</h3>
       <h3>For queries related to Online orders</h3>
       <h3>Please contact us at: contactusnow@Azithropharma.org</h3>
       <h3 style={{marginTop:'50px'}}>For Corporate and Bulk inquiries</h3>
       <h3>Please contact us at: customerservice@Azithropharmacy.org</h3>
     </div>
     <div style={{textAlign:'center',marginTop:'50px'}}>
      <form style={{ border: '1px solid black',width:'500px',margin: '0 auto', marginBottom:'10px',borderRadius:'10px'}}>
      <h3>To get the call from our side Please fill the details</h3>
        <input type="text" style={{width:'200px',margin:'10px'}} placeholder='enter your Name'></input><br/>
        <input type="number" style={{width:'200px',margin:'10px'}} placeholder='enter your number'></input><br/>
        <input type="text" style={{width:'200px',margin:'10px'}} placeholder='enter your Email'></input><br/>
        <textarea rows="4" cols="50" placeholder='enter query details'></textarea><br/>
       <button style={{margin:'5px',backgroundColor:'green'}}>submit</button>
      </form>      
     </div>,






    </div>
  )
}
