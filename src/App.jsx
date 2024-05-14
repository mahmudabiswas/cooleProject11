import { Outlet } from "react-router-dom";
import MainLaout from "./Components/Home/Main/MainLaout";

function App() {
  return (
    <>
      <MainLaout>
        <Outlet />
      </MainLaout>
    </>
  );
}

export default App;
