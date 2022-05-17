import React, { useContext } from 'react';
import Context from '../Context';

export default function AddClient() {

    const {setName, setId, setAddress, setPhone, setCarNum, valid, showNameErr,
          showIdErr, showPhoneErr,} = useContext(Context);


  return (
    <div className='homeDiv'>
        <h1 className='homeHead'>SIGN UP</h1>

        <input className='signUpInputs' onChange={(e) => {setName(e.target.value)}} type="text" placeholder='enter your name'/><br />
        <p style={{color:'red', display:showNameErr ? 'block' : 'none'}}>Err</p>

        <input className='signUpInputs' onChange={(e) => {setId(e.target.value)}} type="number" placeholder='enter your ID'/><br />
        <p style={{color:'red', display:showIdErr ? 'block' : 'none'}}>Err</p>

        <input className='signUpInputs' onChange={(e) => {setAddress(e.target.value)}} type="text" placeholder='enter your address' /><br />

        <input className='signUpInputs' onChange={(e) => {setPhone(e.target.value)}} type="number" placeholder='enter your phone number'/><br />
        <p style={{color:'red', display:showPhoneErr ? 'block' : 'none'}}>Err</p>

        <input className='signUpInputs' onChange={(e) => {setCarNum(e.target.value)}} type="number" placeholder='enter your car number'/><br /><br />
        
        <button className='signUpBtn' onClick={() => {valid()}}>SIGN UP</button>
    </div>
  )
}
