import Select from "react-select";
import { customSelectStyles } from "../../constants/customDropdownStyles";
import { languageOptions } from "../../constants/languageOptions";

// onSelectChange is a function that takes in the selected language
// and sets the language state to the selected language
const LanguagesDropdown = ({ onSelectChange }) => {
  return (
    <Select
      placeholder={`Filter By Category`}
      options={languageOptions}
      styles={customSelectStyles}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguagesDropdown;
