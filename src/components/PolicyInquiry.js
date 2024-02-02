import React from "react";
import ResponsiveDrawer from "./ResponsiveDrawer";
import PropTypes from "prop-types";
import { Box, CssBaseline, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";

const drawerWidth = 240;

function PolicyInquiry() {
  return (
    <div>
      <ResponsiveDrawer />
      <Box sx={{ display: "flex" }}>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Box
            sx={{
              border: 1,
              borderRadius: 2,
              backgroundColor: "#7c0414",
              height: 40,
            }}
          >
            <Typography
              sx={{
                color: "white",
                marginLeft: 5,
                marginTop: 1,
                paddingBottom: 3,
              }}
            >
              Search Policy
            </Typography>
          </Box>
          <Box sx={{ paddingTop: 3 }}>
            <React.Fragment>
              <CssBaseline />
              <Container>
                <Box sx={{ bgcolor: "#d9d9d9", height: "65vh" }}>
                <TextField id="outlined-search" label="Search field" type="search" />
                <TextField id="outlined-search" label="Search field" type="search" />
                <TextField id="outlined-search" label="Search field" type="search" />
                <TextField id="outlined-search" label="Search field" type="search" />
                <TextField id="outlined-search" label="Search field" type="search" />
                </Box>
              </Container>
            </React.Fragment>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default PolicyInquiry;
