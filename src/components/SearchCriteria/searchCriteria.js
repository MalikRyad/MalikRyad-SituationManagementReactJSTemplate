import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField/TextField';
import { Box, Checkbox, FormControlLabel, FormGroup, FormLabel, InputAdornment, Paper } from '@mui/material';
import React, {Component} from 'react';
import { Input } from '../../controls';
import Label from '../../controls/Label';
//import { useForm } from '../../Hooks/useForm';
import "./SerchCriteria.css";

//import { withStyles } from '@material-ui/core/styles';

 

  
//const  getFreshModelObject = () =>({
    
  //  RadarDevice : false,
   // Light_LiveView : false ,
  //  Light_Record : 0,
  //  Comera_Device : 'none',
   // Camera_Record : 0,
   // StartTime : '',
   // EndTime: ''
   // })


    const useStyles = makeStyles(theme => ({
        searchInput: {
            marginLeft: theme.spacing(0.5),
            marginTop: theme.spacing(1),
         
        
     
        },


        searchPaper: {
            padding: '10px 4px 4px 4px',
          
           
        },
        submitButtonGroup: {
            backgroundColor: '#f3b33d',
            color: '#000',
            margin: theme.spacing(1),
            '& .MuiButton-label': {
                textTransform: 'none'
            },
            '&:hover': {
                backgroundColor: '#f3b33d',
            }
        }
    }))

export default function SearchCriteria() {
  
    const classes =  useStyles();
    //const {  values,
     //   setValues,
     //   errors,
     ////   setErrors,
     //   handleInputChange,
      //  resetFormControls} = useForm(getFreshModelObject)


    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
      });
    
      const handleChangeCheckbox = (event) => {
        console.log(event);
        setState({ ...state, [event.target.name]: event.target.checked });
        console.log(state);
      };
    
   
    return (
        
        <div className="sidebar">
        <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Search Criteria</h3>
          <Box>
          <FormGroup row>
        
        <FormLabel className = {classes.searchPaper} >Radar</FormLabel> 

        <br></br>
        
     
     

      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChangeCheckbox} name="checkedA" />}
        label="Device"
      />


<FormLabel >Light Bar</FormLabel> 

      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChangeCheckbox}
            name="checkedB"
            color="primary"
          />
        }
        label="Live view"
      />

<FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChangeCheckbox}
            name="LightRecord"
            color="primary"
          />
        }
        label="Record"
      />


<FormLabel >Camera</FormLabel> 

<FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChangeCheckbox}
            name="CameraDevice"
            color="primary"
          />
        }
        label="Device"
      />


<FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChangeCheckbox}
            name="CameraRecord"
            color="primary"
          />
        }
        label="Record"
      />

        <TextField  className = {classes.searchInput} variant ="outlined" label = "Start Time "
                        name = "StartTime" />

        <TextField   className = {classes.searchInput} variant ="outlined"  label = "End Time "
                name = "EndTime" />

         <TextField   className = {classes.searchInput} variant ="outlined"  label = "Licence Pilote No"
                name = "Licence Pilote" />

        <TextField   className = {classes.searchInput} variant ="outlined"  label = "Vehicule Color"
                        name = "Vehicule Color" />

        <TextField   className = {classes.searchInput} variant ="outlined"  label = "Vehicule Model"
                        name = "Vehicule Model" />
                              <TextField   className = {classes.searchInput} variant ="outlined"  label = "Vehicule Brand"
                        name = "Vehicule Brand" />

    </FormGroup>
    </Box>
      </div>
      </div>
       </div>
    
    );
  
}

