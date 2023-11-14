import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { CreateArticle, Footer, Login, Main, Navbar, Register } from "./components";
import AuthService from "./service/auth";
import { useDispatch } from "react-redux";
import { siginUserSuccess } from "./slice/auth";
import { useEffect } from "react";
import ArticleDetail from "./components/article-detail";
const App = () => {
  const dispatch = useDispatch();
  // getUser
  const getUser = async () => {
    try {
      const response = await AuthService.getUsers();
      dispatch(siginUserSuccess(response.user));
    } catch (error) {
      console.log("hey bro something went wrong");
    }
  };

  useEffect(() => {
    getUser();
  });
  const Layout = () => {
    return (
      <div className="container">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Main />,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/article/:slug",
          element: < ArticleDetail />,
        },
        {
          path: "/create-article",
          element: < CreateArticle />,
        },
      ],
    },
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
