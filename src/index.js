import { Suspense } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Details from "./pages/Details";
import Index from "./pages/Index";
import ErrorPage from "./pages/ErrorPage";
import { Provider } from "react-redux";
import store from "./state";
import SignIn from "./pages/signin";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import SignUp from "./pages/Signup";
import PostList from "./components/PostList";
import Posts from "./pages/Posts";

const AddPost = React.lazy(() => import("./pages/Add"));
const EditPost = React.lazy(() => import("./pages/Edit"));

const postparamHandler = ({ params }) => {
  if (isNaN(params.id)) {
    throw new Response("Bad Request", {
      statusText: "please make ensure to insert correct post id",
      status: 400,
    });
  }
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Index />
          </ProtectedRoute>
        ),
      },
      { path: "login", element: <SignIn /> },
      { path: "register", element: <SignUp /> },
      {
        path: "posts",
        element: (
          <ProtectedRoute>
            <Posts />
          </ProtectedRoute>
        ),
      },
      {
        path: "post/add",
        element: (
          <ProtectedRoute>
            <Suspense>
              <AddPost />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "post/:id/edit",
        element: (
          <Suspense fallback="<div>Loading...</div>">
            <EditPost />
          </Suspense>
        ),
        loader: postparamHandler,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
