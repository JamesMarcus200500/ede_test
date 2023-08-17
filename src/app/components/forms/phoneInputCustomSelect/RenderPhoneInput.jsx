import PhoneInput from "react-phone-number-input/input";
import CountrySelect from "./countryselect";
import en from "react-phone-number-input/locale/en";
import TextInputWithFocus from "../TextInputWithFocus";
import { Alert, Box, Stack, Typography } from "@mui/material";

function RenderPhoneInput(formikProps) {
  const {
    errors,
    touched,
    label,
    type,
    field,
    placeholder,
    height,
    value,
    onChange,
  } = { ...formikProps };
  return (
    <>
      <Box display="flex">
        <Box
          m={0}
          flex={0.3}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ lineHeight: "48px" }}
        >
          <CountrySelect
            labels={en}
            //value={value}
            onChange={onChange}
            style={{
              background: "transparent",
              border: "none",
              textAlign: "right",
              color: "#FFF",
              fontSize: "12px",
            }}
          />
        </Box>
        <Box m={0} flex={0.7}>
          <PhoneInput
            //country="MM"
            // value={value}
            // onChange={onChange}
            // placeholder={placeholder}
            inputComponent={TextInputWithFocus}
            // countrySelectProps={{ unicodeFlags: true }}
            {...formikProps}
            type="tel"
          />
        </Box>
      </Box>
      {errors[field["name"]] && touched[field["name"]] && (
        <Typography
          my={1}
          textAlign="center"
          sx={{ color: "#f63b45" }}
          fontSize="14px"
          fontWeight={600}
        >
          {errors[field.name]}
        </Typography>
      )}
    </>
  );
}
export default RenderPhoneInput;
