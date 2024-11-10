import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../pages/Home/Home";
import About from "../components/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      loader:()=>fetch('/users.json'),
      children: [
        {
          path: '/',
          element: <Home></Home>,
          children: [
            {
              path: '/',
              element: <h2>Button One</h2>
            },
            {
              path: '/buttonTwo',
              element: <h2>Button Two</h2>
            }
          ]
        },
        {
          path: '/about',
          element: <About></About>,
          children: [
            {
              path: '/about',
              element: <h2>About Page One</h2>
            },
            {
              path: '/about/two',
              element: <h2>About Page two</h2>
            }
          ]
        }
      ]
    }
  
  ]);

  export default router;