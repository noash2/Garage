import './App.css';
import React, {useState} from 'react';
import { HashRouter, Routes , Route, useNavigate } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Context from './Context';
import AddClient from './Components/AddClient';
import Client from './Components/Client';

function App() {
  const nav = useNavigate();

  const [clientsArr, setClientsArr] = useState([{name:'NOA', id:'313230062',address:'tel aviv', phone:'0523824037',
  carNum:'5750376',totalPrice:0, totalTime:0, carHistory:['','']}]);

  const [errorsArr, setErrorsArr] = useState([
        {code:'1', description:'tires', time:'2', price:'300' },
        {code:'2', description:'angin', time:'3', price:'700'},
        {code:'3', description:'mirrors', time:'1', price:'150'},
        {code:'4', description:'windows', time:'2', price:'250'} ]);


  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [carNum, setCarNum] = useState('');

  const [showNameErr, setShowNameErr] = useState(false);
  const [showIdErr, setShowIdErr] = useState(false);
  const [showPhoneErr, setShowPhoneErr] = useState(false);
  const [showAddErr, setShowAddErr] = useState(false);

  const [radioSelect, setRadioSelect] = useState('ID');
  const [clientSelect, setClientSelect] = useState('');
  const [clientErrInput, setClientErrInput] = useState('');

  const [showTable, setShowTable] = useState(false);
  const [showClientDetails, setShowClientDetails] = useState(false);

  const [err, setErr] = useState('');
  const [indx, setIndx] = useState(0);
  const [showErrDescription, setShowErrDescription] = useState(false);



  const valid = () => {
    
    let tempClinet = {name:name, id:id, address:address, phone:phone, carNum:carNum, carHistory:[], totalPrice:0, totalTime:0};
    let tempIdErr, tempPhoneErr, tempNameErr = false;

    if (id.length !== 9){
      tempIdErr = true;
    }

    if (phone.length < 7){
      tempPhoneErr = true;
    }
    
    for (let i = 0; i < name.length; i++){
      if (name[i] >= 0 && name[i] <= 9){
          tempNameErr = true;
        }
      }
      
      if (!tempNameErr && !tempIdErr && !tempPhoneErr){
        setClientsArr([...clientsArr, tempClinet]);
        nav("/")
      }
      setShowIdErr(tempIdErr);
      setShowNameErr(tempNameErr);
      setShowPhoneErr(tempPhoneErr);
    }

    const checkError = () => {
      let flag = false;

        errorsArr.map((element, i) => {
          if (clientErrInput === element.code){
            flag = true;
            setErr(element);
            setShowAddErr(true);
          }
        })
      
      if (flag === false){
        setShowAddErr(false);
        alert('ERROR DOES NOT EXIST');
      }

    }

    const addError = () => {
      clientsArr[indx].carHistory.push(err.code);
      clientsArr[indx].totalPrice += Number(err.price);
      clientsArr[indx].totalTime += Number(err.time);
      setShowTable(false);
      setShowAddErr(false);
  }


  return (
    <div className="App">
    <HashRouter>      
      <Context.Provider value={{clientsArr, setClientsArr, errorsArr, setErrorsArr,
        name, id, address, phone, carNum, valid, showNameErr,showIdErr, showPhoneErr,showClientDetails, setShowClientDetails,
        radioSelect, setRadioSelect, setShowNameErr, setClientSelect, clientSelect,clientErrInput, setClientErrInput,
        setName, setId, setAddress, setPhone, setCarNum, showTable, setShowTable,setShowAddErr, addError,
        showAddErr, setShowAddErr, err, setShowErrDescription, showErrDescription, indx, setIndx, checkError}} >
     
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/addclinet" element={<AddClient />}/>
          <Route path={`/client/${clientsArr[indx].name}`} element={<Client />}/>
        </Routes>
    
      </Context.Provider>
      </HashRouter>
    </div>
  );
}

export default App;
