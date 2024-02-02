import React from "react";
import ResponsiveDrawer from "./ResponsiveDrawer";
import PropTypes from "prop-types";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const columns = [
  { field: "id", headerName: "ID", width: 90 },
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
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  {
    id: 1,
    policyNo: "Snow",
    name: "Jon",
    paidDate: "2024-12-03",
    dueAmount: "500",
    premium: "1000",
  },
  {
    id: 2,
    policyNo: "Lannister",
    name: "Cersei",
    paidDate: "2024-12-03",
    dueAmount: "500",
    premium: "1000",
  },
  {
    id: 3,
    policyNo: "Lannister",
    name: "Jaime",
    paidDate: "2024-12-03",
    dueAmount: "500",
    premium: "1000",
  },
  {
    id: 4,
    policyNo: "Stark",
    name: "Arya",
    paidDate: "2024-12-03",
    dueAmount: "500",
    premium: "1000",
  },
  {
    id: 5,
    policyNo: "Targaryen",
    name: "Daenerys",
    paidDate: "2024-12-03",
    dueAmount: "500",
    premium: "1000",
  },
  {
    id: 6,
    policyNo: "Melisandre",
    name: null,
    paidDate: "2024-12-03",
    dueAmount: "500",
    premium: "1000",
  },
  {
    id: 7,
    policyNo: "Clifford",
    name: "Ferrara",
    paidDate: "2024-12-03",
    dueAmount: "500",
    premium: "1000",
  },
  {
    id: 8,
    policyNo: "Frances",
    name: "Rossini",
    paidDate: "2024-12-03",
    dueAmount: "500",
    premium: "1000",
  },
  {
    id: 9,
    policyNo: "Roxie",
    name: "Harvey",
    paidDate: "2024-12-03",
    dueAmount: "500",
    premium: "1000",
  },
];

function DuePolicies() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

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
              rows={rows}
              columns={columns}
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
            <Link to="/OverDuePolicies">
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


export default DuePolicies;
