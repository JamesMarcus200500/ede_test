import PhoneInput from 'react-phone-number-input'
import Input, { getCountries, getCountryCallingCode, isPossiblePhoneNumber, formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input/input'
import { Alert, Stack } from '@mui/material'
import TextInputWithFocus from './TextInputWithFocus'

function PhoneInputMultiCountry(formikProps, value, onChange) {
  const { errors, touched, label, type, field, placeholder, height } = { ...formikProps };
  return (
    <>
      <PhoneInput
        international
        withCountryCallingCode
        value={value}
        onChange={onChange}
        defaultCountry="MM"
        placeholder={placeholder}
        inputComponent={TextInputWithFocus}
        //countrySelectProps={{ unicodeFlags: true }}
        {...formikProps}
      />
      {errors[field['name']] && touched[field['name']] &&
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity='error'>{errors[field.name]}</Alert>
        </Stack>
      }
    </>
  )
}
export default PhoneInputMultiCountry;