import {Link} from "react-router-dom";

const PRODUCTS = [
    {id: 'i1', title: 'Product 1'},
    {id: 'i2', title: 'Product 2'},
    {id: 'i3', title: 'Product 3'}
]

const Products = () => {
    return <div>
        <h1>
            Products
        </h1>
        <ul>
            {PRODUCTS.map((prod) => <li><Link
                key={prod.id} to={prod.id}>{prod.title}</Link>
                </li>)}
        </ul>
    </div>
}

export default Products;