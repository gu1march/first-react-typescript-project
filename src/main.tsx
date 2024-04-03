import React from 'react'
import ReactDOM from 'react-dom/client'
// import ListGroup_P from './components/ListGroup.tsx'
import Header from './components/Header.tsx'
import './index.css'
import Footer from './components/Footer.tsx'

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

ReactDOM.createRoot(document.getElementById('title')!).render(
  <React.StrictMode>
    <Header pages={["index", "About", "Home", "Test", "Dev", "Prod", "Contacts"]} />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Footer apps={["#Facebook","#Twitter","#Bootstrap"]} />
  </React.StrictMode>,
)
