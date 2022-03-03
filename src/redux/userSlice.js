import { createSlice} from '@reduxjs/toolkit'  
import middleware from '../services/middleware';
//import {Middleware } from './services/Middleware'


 export const userSlice = createSlice({
   name: "user",
   initialState: {
     name: "Malik",
     password: "malik_ryad@hotmail.fr",
   },
   reducers: {
     update: (state, action) => {
  //  state =    middleware.login(action.payload.name,action.payload.password )
       state.name = action.payload.name;
       state.password = action.payload.password;
       console.log(state);
       console.log(action.payload.password);
     },

     updateTest: (state, action) => {
      //  state =    middleware.login(action.payload.name,action.payload.password )
           state.name = action.payload.name;
           state.password = action.payload.password;
           console.log(state);
           console.log(action.payload.password);
         },
    

     Login: (state, action) => {
      state =    middleware.login(action.payload.name,action.payload.password )
        console.log(state);
       },
    
    },
    });

    export const { update, Login, updateTest} = userSlice.actions;
    export  default userSlice.reducer;

