import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetCustomersQuery } from "state/api";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";

const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();
  return <div>Customers</div>;
};

export default Customers;
