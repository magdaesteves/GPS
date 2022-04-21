import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Homepage from './component/Homepage';
import Apresentacao from './component/Apresentacao';
import RSI_CTeSP from './component/RSI_CTeSP';
import DWDM_CTeSP from './component/DWDM_CTeSP';
import EI_Licenciatura from './component/EI_Licenciatura';
import TDM_Licenciatura from './component/TDM_Licenciatura';
import EISI_Mestrado from './component/EISI_Mestrado';
// import Login from './component/Login';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact="true" path="/" element={<Homepage></Homepage>}></Route>
          <Route exact="true" path="/apresentacao" element={<Apresentacao></Apresentacao>}></Route>
          <Route exact="true" path="/RSI_CTeSP" element={<RSI_CTeSP></RSI_CTeSP>}></Route>
          <Route exact="true" path="/DWDM_CTeSP" element={<DWDM_CTeSP></DWDM_CTeSP>}></Route>
          <Route exact="true" path="/EI_Licenciatura" element={<EI_Licenciatura></EI_Licenciatura>}></Route>
          <Route exact="true" path="/TDM_Licenciatura" element={<TDM_Licenciatura></TDM_Licenciatura>}></Route>
          <Route exact="true" path="/EISI_Mestrado" element={<EISI_Mestrado></EISI_Mestrado>}></Route>
          {/* <Route exact="true" path="/login" element={<Login></Login>}></Route> */}
        </Routes>
      </div>
    );
  }
}
export default App;