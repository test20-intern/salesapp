
import React, { useState } from 'react';
import Styles from './Login.module.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Login_Image from'../../images/Login_Image.jpg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';


 function Login(){
    const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      if (password.length >= 3) {
        swal("Congradulations!", "You have successfully loged to the system!", "success"); 
        navigate('../Dashboard');
      } else {
        swal("Error", "Your password is wrong", "error");
      }
    } else {
      swal("Error", "Please enter both username and password", "error");
    }
  };
    return(
        <div className={Styles.Page}>
             <Paper elevation={3} className={Styles.LoginPaper} >
             <Box sx={{display: 'flex',flexWrap: 'wrap',}}>
               <Box className={Styles.imageBox}>
                <img src={Login_Image} style={{ width: '300px', height: '300px' }}/>
                </Box>
                <Box className={Styles.formBox}>
                <div className={Styles.FormWithTitle}>
                < Typography className={Styles.title}  variant="h5" gutterBottom>Ceylinco Life - Sales App</Typography>
                <div className={Styles.form}>
                <div className={Styles.UserInputs}><TextField id="outlined-basic" label="Username" variant="outlined" value={username}  onChange={(e) => setUsername(e.target.value)}/></div>
                <div className={Styles.UserInputs}><TextField id="outlined-basic" label="Password" variant="outlined"  type='password'  value={password}  onChange={(e) => setPassword(e.target.value)}/></div>
                <Button variant="contained" style={{marginTop:"5%",width:"75%" }} onClick={handleLogin}> Login</Button>
                </div>
                </div> 
                </Box> 
            </Box>
            </Paper>

        </div>
    );
}
export default Login;
