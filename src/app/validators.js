import validator from "validator";
import { object, string, ref } from "yup";

export const isRequired = (value) =>
  value === undefined ||
  value === "" ||
  (Array.isArray(value) && value.length === 0)
    ? "This information is required"
    : undefined;

export const isEmail = (value) =>
  value === undefined ||
  value === "" ||
  (Array.isArray(value) && value.length === 0)
    ? "This information is required"
    : value && !validator.isEmail(value)
    ? "Please use a valid email address"
    : undefined;

export const isvalidPassword = (value) =>
  value && !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(value)
    ? "Password must be: at least one uppercase character, one digit and minimum length of 6 characters"
    : undefined;

// Check if the password is strong
export function isStrongPassword(password) {
  if (!password) {
    return "password is required";
  }
  if (password.length < 6) {
    return "password must have at least 6 characters";
  }

  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /[0-9]/;

  if (
    !uppercaseRegex.test(password) ||
    !lowercaseRegex.test(password) ||
    !digitRegex.test(password)
  ) {
    return "use a stronger password";
  }

  return true;
}

export const isPhone = (value) =>
  value === undefined ||
  value === "" ||
  (Array.isArray(value) && value.length === 0)
    ? "Phone number is required"
    : value && !/^\+65(6|8|9)\d{7}$/.test(value)
    ? "Phone number must be: start +65  and number only, length of 8 characters"
    : undefined;

// const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

/* const phoneRegex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/; */
// const phoneSchema = yup.object().shape({
//   phone_no: yup.string().matches(phoneRegex, "Invalid phone number").required("this field is required")
// });
// yup.string()
//   .required("required")
//   .matches(phoneRegExp, 'Phone number is not valid')
//   .min(10, "too short")
//   .max(10, "too long");

const phoneRegex = /^09[0-9]{7,9}$/g;

const getCharacterValidationError = (str) => {
  return `must have at least 1 ${str} character`;
};
export const studentRegValidation = object({
  username: string().required("Please enter your username"),
  password: string()
    .required("Please enter a password")
    .min(8, "Password must have at least 8 characters")
    // different error messages for different requirements
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  cpassword: string()
    .required("Please re-type your password")
    .oneOf([ref("password")], "Passwords does not match"),
  dob: string().nullable().required("This field is require"),
  gender: string().nullable().required("This information is required"),
  regionId: string().nullable().required("Region is require"),
  address: string().required("This field is required"),
});
export const teacherRegValidation = object({
  username: string().required("Please enter your username"),
  password: string()
    .required("Please enter a password")
    .min(8, "Password must have at least 8 characters")
    // different error messages for different requirements
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  cpassword: string()
    .required("Please re-type your password")
    .oneOf([ref("password")], "Passwords does not match"),
  email: string()
    .required("Email is required")
    .email()
    .matches(/^(?!.*@[^,]*,)/),
  gender: string().nullable().required("This information is required"),
  phoneNumber: string()
    .required("Phone number is required")
    .matches(phoneRegex, "Phone number is not valid")
    .min(7, "too short")
    .max(11, "too long"),
  address: string().required("This field is required"),
});
