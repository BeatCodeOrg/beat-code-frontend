import { createContext, useContext, useState } from "react";

const UserContext = createContext();
export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [userID, setUserID] = useState(-1);

  const setUser = (username_, userID_) => {
    setUsername(username_);
    setUserID(userID_);
  };

  const setGuest = () => {
    // make a call to backend - similar to room codes
  };

  return (
    <UserContext.Provider value={{ username, userID, setUser, setGuest }}>
      {children}
    </UserContext.Provider>
  );
};
