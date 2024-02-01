import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Login_Image from'../../images/Login_Image.jpg';
import TextField from '@mui/material/TextField';

function LoginPage(){
    return(
        <div>
            <Paper elevation={3} sx={{display:'flex',flexDirection:'column',justifyContent:'center',width:'50%'}}>
           <Box sx={{display: 'flex' ,flexWrap: 'wrap'}}>
           <img src={Login_Image} style={{ width: '300px', height: '300px' ,padding:'5%'}} />
          
          <form sx={{display:'flex',justifyContent:'center'}}>
            
            <div>
            <TextField id="standard-basic" label="User Name" variant="standard" />
            </div>
            <div>
            <TextField id="standard-basic" label="password" variant="standard"  type="password"/>
            </div>
          </form>

           </Box>
           
        
            </Paper>

        </div>
    );

}
export default LoginPage;