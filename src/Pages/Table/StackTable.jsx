// src/components/StackTable.js
import React, { useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserData,
  selectFilteredDataActive,
  selectFilteredDataInactive,
  selectFilteredDataVerified,
  selectFilteredDataUnverified,
} from "../../feature/userSlice";
import styled from 'styled-components';
import { FaRegEdit } from "react-icons/fa";

const HideScrollbarDiv = styled.div`
  overflow-x: hidden;
  * {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  *::-webkit-scrollbar {
    display: none;
  }
`;

function StackTable() {
  const dispatch = useDispatch();
  const { status, error, filter, emailFilter } = useSelector((state) => state.users);

  // Select the appropriate filtered data based on the current filters
  const filteredData = useSelector((state) => {
    if (filter === "active") {
      return selectFilteredDataActive(state);
    } else if (filter === "inactive") {
      return selectFilteredDataInactive(state);
    } else if (emailFilter === "verified") {
      return selectFilteredDataVerified(state);
    } else if (emailFilter === "notverified") {
      return selectFilteredDataUnverified(state);
    }
    return [];
  });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUserData());
    }
  }, [dispatch, status]);

  const columns = [
    { name: "S.No", options: { customBodyRender: (value, tableMeta) => tableMeta.rowIndex + 1 } },
    { name: "email", label: "Email", options: { customBodyRender: (value) => value } },
    { name: "username", label: "Username", options: { customBodyRender: (value) => value } },
    { name: "unique_id", label: "UID", options: { customBodyRender: (value) => value } },
    { name: "country", label: "Country", options: { customBodyRender: (value) => value } },
    { name: "createdAt", label: "Register On", options: { customBodyRender: (value) => value } },
    { name: "emailVerified", label: "Status", options: { customBodyRender: (value) => value } },
    { name: "Manage", label: "Manage", options: { customBodyRender: (value, tableMeta) => (
        <button><FaRegEdit /> {tableMeta.rowData[3]}</button>
      ) 
    }},
  ];

  const options = {
    selectableRows: false,
    elevation: 0,
    rowsPerPage: 5,
    responsive: "standard",
    rowsPerPageOptions: [5, 10, 20, 25],
  };

  const getMuiTheme = () => createTheme({
    typography: { fontWeightBold: "bold" },
    palette: { background: { paper: "#081A51", default: "#081A51" }, mode: "dark" },
    components: {
      MuiTableCell: {
        styleOverrides: {
          head: { padding: "10px 4px" },
          body: { padding: "7px 15px", color: "#e2e8f0" },
        },
      },
    },
  });

  return (
    <div className="bg-whitesmoke py-16 min-h-screen grid place-items-center">
      <HideScrollbarDiv className="w-[95%] max-w-6xl">
        <ThemeProvider theme={getMuiTheme()}>
          {status === 'loading' ? (
            <p>Loading...</p>
          ) : status === 'failed' ? (
            <p>Error: {error}</p>
          ) : (
            <MUIDataTable
              title={"User List"}
              data={filteredData}
              columns={columns}
              options={options}
            />
          )}
        </ThemeProvider>
      </HideScrollbarDiv>
    </div>
  );
}

export default StackTable;
