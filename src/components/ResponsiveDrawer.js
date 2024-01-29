import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PolicyRoundedIcon from "@mui/icons-material/PolicyRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import { Link } from "react-router-dom";

import logo2 from "../images/logo2.jpg";
import { Avatar } from "@mui/material";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const linkUrls = [
    "/dashboard",
    "/policyinquiry",
    "/lapsedpolicies",
    "/overduepolicies",
    "/duepolicies",
    "/collectionreport",
  ];

  const drawer = (
    <div>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          alt="ceylinco logo 2"
          src={logo2}
          sx={{
            width: 45,
            height: 45,
            marginLeft: 4,
            marginTop: 2,
            display: { xs: "none", sm: "block" },
          }}
        />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ color: "white", marginLeft: 2, marginTop: 2 , display: { xs: "none", sm: "block" }}}
        >
          Sales App
        </Typography>
        <Toolbar />
      </Box>
      
      <List sx={{ color: "white" }}>
        {[
          "Dashboard",
          "Policy Inquiry",
          "Lapsed Policies",
          "Overdue policies",
          "Due policies",
          "Collection Report",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={Link}
              to={linkUrls[index]}
              sx={{ border: 1, borderRadius: 1, margin: 1 }}
            >
              <ListItemIcon sx={{ color: "white" }}>
                {index === 0 && <DashboardRoundedIcon />}
                {index === 1 && <PolicyRoundedIcon />}
                {index === 2 && <PolicyRoundedIcon />}
                {index === 3 && <PolicyRoundedIcon />}
                {index === 4 && <PolicyRoundedIcon />}
                {index === 5 && <LibraryBooksRoundedIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#7c0414",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#7c0414",
            },
          }}
        >
        <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          alt="ceylinco logo 2"
          src={logo2}
          sx={{
            width: 45,
            height: 45,
            marginLeft: 4,
            marginTop: 2,
            display: { xs: "block", sm: "none" },
          }}
        />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ color: "white", marginLeft: 2, marginTop: 2 , display: { xs: "block", sm: "none" }}}
        >
          Sales App
        </Typography>
      </Box>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#7c0414",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
