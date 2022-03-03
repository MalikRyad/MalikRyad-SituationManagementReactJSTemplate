import React, {Component} from 'react';
import { useSelector } from "react-redux";
import Camera from '../../components/Camera/camera';
import LeafletMap from '../../components/leaflet/leafletMap';
import SearchCriteria from '../../components/SearchCriteria/searchCriteria';


import "./SituationManagement.css";


  const  SituationManagement = () => {
   
    const name = useSelector((state) => state.user.name);
    console.log(name);

    return (

<div className="container">
           <SearchCriteria></SearchCriteria>

           
        <div className="situationManagement">
           
            <div  className="situationManagementWidgets">
            <LeafletMap></LeafletMap>
            <LeafletMap></LeafletMap>
            </div>
            <div  className="situationManagementWidgets">
            <LeafletMap></LeafletMap>
            <LeafletMap></LeafletMap>
            </div>


       </div>
       </div>  
    
    );
  }

  export default SituationManagement;