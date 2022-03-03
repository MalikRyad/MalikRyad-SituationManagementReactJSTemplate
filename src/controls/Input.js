import React from 'react'
import {TextField} from '@material-ui/core';


export default function Input(props){

    const{name, label,value,variant,onchange ,error= null, ...other}
    =props;
    return(
        <TextField
        variant =  {variant || "outlined"}
        label = {label}
        name = {name}
        value = {value}
        onChange = {onchange}
        {...other}
        {...(error &&{error : true , helpText : error})}
      
        />
        
        )



}