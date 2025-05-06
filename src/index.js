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
      { index: true, element: <Index /> },
      { path: "post", element: <Index /> },
      { path: "login", element: <SignIn /> },
      {
        path: "post/add",
        element: (
          <Suspense fallback="<div>Loading...</div>">
            <AddPost />
          </Suspense>
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
      {
        path: "post/:id",
        element: <Details />,
        loader: ({ params }) => {
          if (isNaN(params.id)) {
            throw new Response("Bad Request", {
              statusText: "please make sure to insert request id",
              status: 400,
            });
          }
        },
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
