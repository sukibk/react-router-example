import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from "./pages/Home";
import Products from "./pages/Products";
import {Root} from "./pages/Root";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {path: '/', element: <HomePage/>},
            {path: '/products', element: <Products/>}
        ]
    }
])

// const routeDefinitions = createRoutesFromElements(
//    <Route>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/products" element={<Products />} />
//     </Route>
// )

// const router = createBrowserRouter(routeDefinitions);

function App() {

  return (<RouterProvider router={router}/>);
}

export default App;
