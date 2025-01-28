import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './views/Home/Home';
import About from './views/About/About';
import Dashboard from './views/Dashboard/Dashboard';

// react routing using library
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    }
])


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />)



// react routing using JS

// root.render(
//     <>
//         <App/>
//     </>
// )
// function App(){

//     const path = window.location.pathname;
    
//     // if( path == '/'){
//     //     root.render(<Home />)
//     // }
//     // else if( path == '/Dashboard'){
//     //     root.render(<Dashboard />)
//     // }
//     // else{
//     //     root.render(<h1>404 page not found</h1>)
//     // }



//     switch(path){
//         case'/':
//         return <Home />

//         case'/dashboard':
//         return <Dashboard />

//         default:
//         return<h1>404 page not found</h1>
//     }


// }




