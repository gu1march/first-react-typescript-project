import React from "react";
import ReactDOM from "react-dom/client";
// import Root from "./routes/root.tsx";
import "./index.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import About from "./routes/About.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// function createBrowserRouter(arg0: { path: string; element: import("react/jsx-runtime").JSX.Element; }[]) {
//   throw new Error("Function not implemented.");
// }
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
//   {
//     path: "/about",
//     element: <about></about>,
//   }
// ]);

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     {/* <c-header></c-header>
//     <c-menu></c-menu>

//     <RouterProvider router={router} />

//     <router>
//       <ListGroup items={["New York", "San Francisco", "Tokyo", "London", "Paris",]} heading='cities1' />
//     </router>

//     <c-footer></c-footer> */}
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header pages={["Home", "About", "Contact"]} />
    <About />

    <Footer
      path_apps={[
        "https://www.linkedin.com/in/guilherme-marchioni-38a13a226/",
        "https://github.com/gu1march",
      ]}
      path_img={["../imgs/linkedin.png", "../imgs/github.png"]}
    />
  </React.StrictMode>
);
