import ReactDom from 'react-dom/client';
import Home from './views/Home/Home'
import Dashboard from './views/Dashboard/Dashboard'

const root = ReactDom.createRoot(document.getElementById("root"));

function App(){

    const path = window.location.pathname;
    
    // if( path == '/'){
    //     root.render(<Home />)
    // }
    // else if( path == '/Dashboard'){
    //     root.render(<Dashboard />)
    // }
    // else{
    //     root.render(<h1>404 page not found</h1>)
    // }



    switch(path){
        case'/':
        return <Home />

        case'/dashboard':
        return <Dashboard />

        default:
        return<h1>404 page not found</h1>
    }


}

root.render(
    <>
        <App />
    </>
)