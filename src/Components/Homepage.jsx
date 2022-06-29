import React, {useContext} from 'react'
import Context from '../Context';
import { Link } from 'react-router-dom';

export default function Homepage() {

    const {clientsArr, radioSelect, setRadioSelect, clientSelect,setClientSelect, indx, setIndx} = useContext(Context);


  return (
    <div className='homeDiv'>
        <h1 className='homeHead'>SV-GARAGE</h1>
        <button className='newClientBtn'><Link to="/addclinet" className='links'>new client</Link></button><br /><br />

        <select className='clientSelect' onChange={(e) => {setIndx(e.target.value)}} required>
            <option value="choose" selected="true" disabled="disabled"> --choose client-- </option>
            {clientsArr.map((elemnt, i) => {
                if (radioSelect === 'ID'){
                   return <option value={i}>{elemnt.id}</option>
                }
                
                else{
                    return <option value={i}>{elemnt.carNum}</option>
                }
            })}
        </select><br /><br />

        <label className='radioLabels' htmlFor="car number">Car Number</label>
        <input onChange={() => {setRadioSelect('car number')}} type='radio' name='radioBtn'/>
        <label className='radioLabels' htmlFor="ID">ID</label>
        <input onChange={() => {setRadioSelect('ID')}} type='radio' defaultChecked name='radioBtn'/><br/><br />

        <button className='goHomeBtn'><Link className='links' to={`/client/${clientsArr[indx].name}`}>go</Link></button>
    </div>
  )
}
