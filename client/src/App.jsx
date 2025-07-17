import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes";

const App = () => {
  return (
    <>
      {/* <div className="flex h-screen w-screen justify-center items-center gap-8">
        <img src="/assets/logo.png" height={100} width={100} />
        <h1 className="text-6xl">Baker's Bakery Website Coming Soon!</h1>
      </div> */}

      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
