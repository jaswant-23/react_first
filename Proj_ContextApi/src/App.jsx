import { BioContext, BioProvider } from "./component/contextApi";
import Home from "./component/Home";
function App() {
  return (
      <BioProvider>
        <Home />
      </BioProvider>
  );
}

export default App;
