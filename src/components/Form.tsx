"use client";
import React from "react";
import { Box, Button, TextField, useMediaQuery } from "../lib/mui";
import { Formik } from "formik";
import { initialValuesTypes } from "@/types/_types";
import * as yup from "yup";

interface FormType {
  initialValues: initialValuesTypes;
  userSchema: yup.ObjectSchema<
    {
      firstName: string;
      lastName: string;
      email: string;
      contact: string;
      address1: string;
      address2: string;
    },
    yup.AnyObject,
    {
      firstName: undefined;
      lastName: undefined;
      email: undefined;
      contact: undefined;
      address1: undefined;
      address2: undefined;
    },
    ""
  >;
}

export default function Form({ initialValues, userSchema }: FormType) {
  const isNotMobile = useMediaQuery("(min-width:600px)");

  const handleForm = (values: initialValuesTypes) => {
    console.log(values);
  };
  return (
    <Formik
      onSubmit={handleForm}
      initialValues={initialValues}
      validationSchema={userSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": {
                gridColumn: ` ${isNotMobile ? "" : "span 4"}`,
              },
            }}
          >
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              name="firstName"
              error={!!touched.firstName && !!errors.firstName}
              helperText={!!touched.firstName && `${errors.firstName}`}
              sx={{
                gridColumn: "span 2",
              }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              name="lastName"
              error={!!touched.lastName && !!errors.lastName}
              helperText={!!touched.lastName && `${errors.lastName}`}
              sx={{
                gridColumn: "span 2",
              }}
            />{" "}
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={!!touched.email && !!errors.email}
              helperText={!!touched.email && `${errors?.email}`}
              sx={{
                gridColumn: "span 4",
              }}
            />{" "}
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="contact"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.contact}
              name="contact"
              error={!!touched.contact && !!errors.contact}
              helperText={!!touched.contact && `${errors.contact}`}
              sx={{
                gridColumn: "span 4",
              }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Address 1"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address1}
              name="address1"
              error={!!touched.address1 && !!errors.address1}
              helperText={!!touched.address1 && `${errors.address1}`}
              sx={{
                gridColumn: "span 4",
              }}
            />{" "}
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Address 2"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address2}
              name="address2"
              error={!!touched.address2 && !!errors.address2}
              helperText={!!touched.address2 && `${errors.address2}`}
              sx={{
                gridColumn: "span 4",
              }}
            />
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              Create New User
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}
