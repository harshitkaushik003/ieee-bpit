import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Team from "./Pages/Team";

function App() {
  const router = createBrowserRouter([
    {path: "/", element: <Navbar/>, children:[
      {
        index:true,
        element:<Home/>
      },{
        path: 'team',
        element: <Team/>
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
