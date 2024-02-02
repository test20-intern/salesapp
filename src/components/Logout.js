import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Typography } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import swal from "sweetalert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Logout() {
  const handleLogout = () => {
    swal({
      title: "Are you sure you want to log out from the site?",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then((willLogout) => {
      if (willLogout) {
        // Perform logout logic here
        console.log("Logging out...");
        // For now, redirect to the login page
        window.location.href = "/";
        
      } else {
        console.log("Cancelled logout.");
      }
    });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: 6,
          marginTop: 12,
        }}
      >
        <Typography sx={{ color: "white" }}>Log Out</Typography>
        <LogoutIcon
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ color: "white", marginLeft: 9, cursor: "pointer" }}
        />

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Box>
    </div>
  );
}

export default Logout;
