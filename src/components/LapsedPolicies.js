import React, { useEffect, useState } from "react";
import ResponsiveDrawer from "./ResponsiveDrawer";
import PropTypes from "prop-types";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const drawerWidth = 240;

const columns = [
  // { field: "id", headerName: "ID", width: 90 },
  {
    field: "policyNo",
    headerName: "Policy No",
    width: 150,
    editable: true,
  },
  {
    field: "name",
    headerName: "name",
    width: 150,
    editable: true,
  },
  {
    field: "paidDate",
    headerName: "Paid Date",
    type: "Date",
    width: 110,
    editable: true,
  },
  {
    field: "dueAmount",
    headerName: "Due Amount",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "premium",
    headerName: "Premium",
    type: "number",
    width: 110,
    editable: true,
  },
];


function LapsedPolicies() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:8080/api/v1/employees")
      .then((response) => {
        console.log("Received data:", response.data);
        setEmployeeData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee details:", error);
      });
  };

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
            width: "100%", // Set width to 100% for both mobile and desktop
            marginLeft: 0, // Reset margin for both mobile and desktop
          }}
        >
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={employeeData}
              columns={columns}
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                },
              }}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
          <Stack
            spacing={2}
            direction="row"
            sx={{ justifyContent: "center", marginTop: 5 }}
          >
            <Link to="/PolicyInquiry">
              <Button variant="contained">Back</Button>
            </Link>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default LapsedPolicies;
