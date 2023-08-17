import PropTypes from "prop-types";
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

const CountrySelect = ({ value, onChange, labels, ...rest }) => (
  <select {...rest} value={value} onChange={onChange}>
    {/* {getCountries().map((country) => { */}
    {["MM"].map((country) => {
      return (
        <option key={country} value={`+${getCountryCallingCode(country)}`}>
          {getUnicodeFlagIcon(country)} +{getCountryCallingCode(country)}
        </option>
      );
    })}
  </select>
);

export default CountrySelect;

CountrySelect.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  labels: PropTypes.objectOf(PropTypes.string).isRequired,
};
