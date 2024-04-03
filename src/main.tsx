import React from 'react'
import ReactDOM from 'react-dom/client'
import ListGroup_P from './components/ListGroup.tsx'
import './index.css'

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
    <ListGroup_P items={["New York", "San Francisco", "Tokyo", "London", "Paris"]} heading='cities3' texts={['0','1','2','3','4']} />
  </React.StrictMode>,
)
