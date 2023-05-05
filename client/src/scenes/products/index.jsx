import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useGetProductsQuery } from "state/api";
import Header from "components/Header";

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  console.log("data", data);

  return (
    <Box>
      <Header title="PRODUCTS" subtitle="See your list of products." />
    </Box>
  );
};

export default Products;
