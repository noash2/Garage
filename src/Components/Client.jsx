import React, {useContext} from 'react'
import Context from '../Context';
import { Link } from 'react-router-dom';

export default function Client() {
    const {clientsArr, showTable, setShowTable, showClientDetails, setShowClientDetails, setClientErrInput,
         showAddErr, err, showErrDescription, setShowErrDescription, indx, addError,checkError, errorsArr} = useContext(Context);

  
    return (    
        <div className='homeDiv'>
            
            <button className='clientBtns' onClick={() => {setShowTable(!showTable)}}>history</button>
            <button className='clientBtns' onClick={() => {setShowClientDetails(!showClientDetails)}}>client details</button><br /><br />

            <div style={{display:showTable ? 'inline-block' : 'none'}}>
            <table>
                <tr>
                    <th>Err Code</th>
                    <th>Err Time</th>
                    <th>Err Price</th>
                </tr>
                {clientsArr[indx].carHistory.map((element) =>{
                    debugger
                    for (let i = 0; i < errorsArr.length; i++){
                        if (element === errorsArr[i].code){ 
                            return  <tr>
                                        <td>{errorsArr[i].code}</td>
                                        <td>{errorsArr[i].time}</td>
                                        <td>{errorsArr[i].price}</td>
                                    </tr>
                        }
                    }
                        })}

                <tr>
                    <td style={{fontWeight:'bold'}}>Total Time</td>
                    <td>{clientsArr[indx].totalTime / 24}</td>
                </tr>
                <tr>
                    <td style={{fontWeight:'bold'}}>Total Price</td>
                    <td>{clientsArr[indx].totalPrice}</td>
                </tr>
            </table>
        </div><br /><br />

        <div style={{display:showClientDetails ? 'block' : 'none'}}>
                <p>name: {clientsArr[indx].name}</p>
                <p>id: {clientsArr[indx].id}</p>
                <p>address: {clientsArr[indx].address}</p>
                <p>phone number: {clientsArr[indx].phone}</p>
                <p>car number: {clientsArr[indx].carNum}</p>
        </div>

        <input className='errInput' type="text" onChange={(e) => {setClientErrInput(e.target.value)}} placeholder="Enter Error Code"/>
        <button className='errInputBtn' onClick={() => {checkError()}}>continue</button><br /><br />

        <div style={{display:showAddErr ? 'block' : 'none'}}>
            <button className='errBtn' onClick={() => {setShowErrDescription(true)}}>show error details</button>
            <button className='errBtn' onClick={() => {addError()}}>add error</button><br /><br />
            
            <button className='errBtn' style={{display:showErrDescription ? 'inline-block' : 'none'}} 
            onClick={() => {setShowErrDescription(false)}}>{err.description}</button><br /><br />
        </div>


        <button className='goHomeBtn'><Link className='links' to="/">back to home page</Link></button>
    </div>
  )
}
