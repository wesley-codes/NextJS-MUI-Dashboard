import React from "react";
import { Box, Button, TextField } from "../../lib/mui";

import Header from "@/components/Header";
import Form from "@/components/Form";
import { initialValuesTypes } from "@/types/_types";
import { userSchema } from "@/lib/yup";
export default function page() {
 

  const initialValues: initialValuesTypes = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };



  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create user profile" />
      <Form initialValues= {initialValues} userSchema={userSchema}/>
    </Box>
  );
}
