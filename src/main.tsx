import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import ListGroup_P from './components/ListGroup.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Subheader from './components/Badges.tsx'

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


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Subheader name_app={["HTML","JavaScript","TypeScript"]} path_img={["../html.png","../js.png","../ts.jpg"]} />
  </React.StrictMode>,
)
