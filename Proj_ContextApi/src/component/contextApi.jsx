import context, { useContext } from "react";

export const BioContext = context.createContext();


export const BioProvider = ({ children }) => {
// Here is the data we want to share via context
  const bioData = {
    header: "This is the header from context",
    footer: "This is the footer from context",
  };


  return <BioContext.Provider value={bioData}> {/*Here i pass the data to proider*/}
    {children}
    </BioContext.Provider>;
};
