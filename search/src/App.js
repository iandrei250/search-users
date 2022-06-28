import "./App.css";
import Home from "./pages/Home";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider className="container-fluid">
      <Home />
    </UserProvider>
  );
}

export default App;
