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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      if (password.length >= 3) {
        swal("Congratulations!", "You have successfully logged into the system!", "success");
        navigate('../Dashboard');
      } else {
        swal("Error", "Your password is wrong", "error");
      }
    } else {
      swal("Error", "Please enter both username and password", "error");
    }
  };

  return (
    <div className={Styles.Page}>
      <Paper elevation={3} className={Styles.LoginPaper}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <Box className={Styles.imageBox}>
            <img src={Login_Image} style={{ width: '70%', height: '90%' }} alt="Login" />
          </Box>

          <Box className={Styles.formBox}>
            <div className={Styles.form}>
              <div className={Styles.UserInputs}>
                <TextField InputProps={{endAdornment: (<InputAdornment position="end">
                  <AccountCircleIcon />
                  </InputAdornment>)}}
                  id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} ></TextField>
              </div>
              <div className={Styles.UserInputs}>
                <TextField InputProps={{endAdornment: (<InputAdornment position="end">
                  <EnhancedEncryptionIcon />
                  </InputAdornment>)}}id="outlined-basic" label="Password" variant="outlined" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <Button variant="contained" style={{ marginBottom: "5%",marginTop:"5%", width: "100%" }} onClick={handleLogin}> Login</Button>
            </div>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}

export default Login;
