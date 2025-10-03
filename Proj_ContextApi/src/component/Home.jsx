import React from "react";
import { useContext } from "react";
import { BioContext } from "./contextApi";

function Home() {
    // here i consume the data from context
  const myBio_var = useContext(BioContext);

  return (
    <div>
      <h1>This is the Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <br />
      <p>
        🔍 Bio from Context: {myBio_var.header} and : The Footer is: {myBio_var.footer}
      </p>
    </div>
  );
}

export default Home;
