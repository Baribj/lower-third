import {
  Box,
  Button,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import schema from "../../../schemas/lowerThirdSchema.json";
import { LowerThirdSchema } from "../../types/schemas/lowerThirdSchema";
import Ajv from "ajv";

const ajv = new Ajv();
const validate = ajv.compile(schema);
const initialValues: LowerThirdSchema = { text: "", isVisible: false };

const lowerThirdReplicant = nodecg.Replicant<LowerThirdSchema>("lowerThird");

const validateForm = (values: LowerThirdSchema) => {
  const valid = validate(values);

  if (!valid && validate.errors) {
    return validate.errors.reduce<
      Partial<{ [key in keyof LowerThirdSchema]: string }>
    >((acc, error) => {
      const path = error.instancePath.slice(1) as keyof LowerThirdSchema; // Remove leading "/"
      acc[path] = error.message;
      console.log(acc);
      return acc;
    }, {});
  }

  return {};
};

export default function Host() {
  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      validateOnMount
      onSubmit={(values) => {
        lowerThirdReplicant.value = values;
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        dirty,
      }) => (
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <div>
              <Typography mb={1}>Announcement text</Typography>

              <TextField
                id="text"
                name="text"
                type="text"
                required
                size="small"
                fullWidth
                variant="outlined"
                placeholder="Enter announcement"
                value={values.text}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.text)}
                helperText={errors.text}
              />
            </div>

            <div>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography>Visibility</Typography>

                <Switch
                  name="isVisible"
                  id="isVisible"
                  value={values.isVisible}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Box>
            </div>

            <Box display="flex" justifyContent="end">
              <Button
                type="submit"
                variant="contained"
                disableElevation
                endIcon={<SendOutlinedIcon />}
                disabled={!isValid || !dirty}
              >
                Send
              </Button>
            </Box>
          </Stack>
        </form>
      )}
    </Formik>
  );
}
