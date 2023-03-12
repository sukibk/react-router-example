import {Link, useParams} from 'react-router-dom'

export const ProductDetails = (props) => {
    const params = useParams();

    return <>
        <h1>Product Details</h1>
        <p>{params.productId}</p>
        <Link to='..' relative='root'>Back</Link>
    </>

}