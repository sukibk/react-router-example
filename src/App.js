import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from "./pages/Home";
import Products from "./pages/Products";
import {Root} from "./pages/Root";
import {ErrorPage} from "./pages/Error";
import {ProductDetails} from "./pages/ProductDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'products', element: <Products/>},
            {path: 'products/:productId', element: <ProductDetails />}
        ],
        errorElement: <ErrorPage/>
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
