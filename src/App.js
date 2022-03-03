import React from 'react';
import './App.css';
import L from 'leaflet';
import Leaflet from './leaflet';
import Topbar from './components/topbar/Topbar';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import LeafletMap from './components/leaflet/leafletMap';
import SituationManagement from './page/situationManagement/situationManagement';
import ResponsiveAppBar from './components/topbar/ResponsiveAppBar';
import SignInSide from './page/login/SignIn';
import SignT from './page/login/SignT';



function App () {
  
  const [state, setState] = React.useState({
    showModeratorBoard: false
   
  });




    return (
      <Router>
      <div>
      <div> 
      {state.showModeratorBoard && (
        <ResponsiveAppBar></ResponsiveAppBar>)}
    

      </div>
      <div className='map'> 

      <Routes>
       
          <Route exact path="/leafletMap" element={<LeafletMap/>}/>
          
          <Route exact path="/situationManagement" element={<SituationManagement/>}/>

          <Route exact path="/" element={<SignT/>}/>
        
        
         
         
          </Routes>
        
     
      </div>
      </div>
      </Router>
    );
  }


export default App;
