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

  const setGuest = async () => {
    // make a call to backend - similar to room codes
    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      // Do something with the response data if needed
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <UserContext.Provider value={{ username, userID, setUser, setGuest }}>
      {children}
    </UserContext.Provider>
  );
};
