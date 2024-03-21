import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";

function App() {
  const router = createBrowserRouter([
    {path: "/", element: <Navbar/>, children:[
      {
        index:true,
        element:<Home/>
      }
    ]}
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App; 
