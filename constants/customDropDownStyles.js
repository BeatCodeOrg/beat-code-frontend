// Taken from https://github.com/manuarora700/react-code-editor/blob/main/src/constants/customStyles.js
export const customSelectStyles = {
  control: (styles) => ({
    ...styles,
    width: "100%",
    maxWidth: "14rem",
    minWidth: "10rem",
    borderRadius: "5px",
    color: "#000",
    fontSize: "0.7rem",
    lineHeight: "1rem",
    backgroundColor: "#fffaf2",
    cursor: "pointer",
    border: "2px solid #000000",
    boxShadow: "5px 5px 0px 0px rgba(0,0,0);",
    ":hover": {
      border: "2px solid #000000",
      boxShadow: "none",
    },
  }),
  option: (styles) => {
    return {
      ...styles,
      color: "#000",
      fontSize: "0.7rem",
      lineHeight: "1rem",
      width: "100%",
      background: "#fffaf2",
      ":hover": {
        backgroundColor: "rgb(243 244 246)",
        color: "#000",
        cursor: "pointer",
      },
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      backgroundColor: "#fff",
      maxWidth: "14rem",
      border: "2px solid #000000",
      borderRadius: "5px",
      boxShadow: "5px 5px 0px 0px rgba(0,0,0);",
    };
  },

  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#000",
      fontSize: "0.8rem",
      lineHeight: "1.75rem",
    };
  },
};
