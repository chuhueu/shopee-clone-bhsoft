import React from "react";
import { Header, Footer } from "../components/index";
import { Box } from "@material-ui/core";
const SellerPage = () => {
  return (
    <div>
      <Header />
      <Box textAlign="center" component="h1">
        This is the Seller page
      </Box>
      <Footer show={true} />
    </div>
  );
};

export default SellerPage;