import Navbar from "./components/Navbar";
import FetchData from "./components/FetchData";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

import Categories from "./views/Categories"
import { loadercatgories } from "./components/CategoriesPage";
import CatgeoriesPage from "./components/CategoriesPage";
import SearchItems from "./components/SearchItems";
// import CheckMore from "./components/CheckMore";
import { loadercheckmore } from "./views/CheckMorePage";
import CheckMorePage from "./views/CheckMorePage"




const router = createBrowserRouter([
  {
    

    path: "/",
    element: <Navbar/>,
    children: [
      {
        index: true,
        element: <FetchData/>,
      },
      // {  
      // path: "SearchItems",
      // element:<SearchItems/>
      // },
      {
      path: "categories",
      element: <Categories/>
      },
      {
        path: "search",
        element: <SearchItems/>
        },
      {
        path: "/categories/:categories",
        element: <CatgeoriesPage/>,
        loader: loadercatgories
      },
      
        {
          path: "/checkmore/:id",
          element: <CheckMorePage/>,
          loader: loadercheckmore
          }
    ]
  },
]);



function App () {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  )
}



export default App;
