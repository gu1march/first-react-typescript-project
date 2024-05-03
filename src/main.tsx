import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./index.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import About from "./routes/About.tsx";
import Contact from "./routes/Contact.tsx";
import Root from "./routes/Root.tsx";

const router = createBrowserRouter([
  {
    path: '/index.html',
    element: <Root />, 
  }, 
  {
    path: '/',
    element: <Root />, 
  },
  {
    path: '/Home',
    element: <Root />, 
  },
  {
    path: '/About',
    element: <About />, 
  },
  {
    path: '/Contact',
    element: <Contact />, 
  },
  // Add more routes as needed
]);





ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header pages={["Home", "About", "Contact"]} />

    <RouterProvider router={router} />

    <Footer
      path_apps={[
        "https://www.linkedin.com/in/guilherme-marchioni-38a13a226/",
        "https://github.com/gu1march",
      ]}
      path_img={["../imgs/linkedin.png", "../imgs/github.png"]}
    />
  </React.StrictMode>
);
