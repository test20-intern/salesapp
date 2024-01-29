
import React, { useState } from 'react';
import Styles from './Login.module.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Login_Image from'./Login_Image.jpg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

 function Login(){
    return(
        <div className={Styles.Page}>
             <Paper elevation={3} className={Styles.LoginPaper} >
             <Box sx={{display: 'flex',flexWrap: 'wrap',}}>
                <img src={Login_Image} style={{ width: '300px', height: '300px' }}/>
                <div className={Styles.FormWithTitle}>
            
                < Typography className={Styles.title} style={{marginLeft:"2%"}} variant="h5" gutterBottom>Ceylinco Life - Sales App</Typography>
                <div className={Styles.form}>
                <div className={Styles.UserInputs}><TextField id="outlined-basic" label="Username" variant="outlined" /></div>
                <div className={Styles.UserInputs}><TextField id="outlined-basic" label="Password" variant="outlined"  type='password'/></div>
                <Button variant="contained" style={{marginTop:"5%",width:"75%" }} > Login</Button>
                </div>
              

                </div>  
            </Box>
            </Paper>

        </div>
    );
}
export default Login;