import {Link, useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('products');
    }

    return <div>
        <h1>
            My Home Page
        </h1>
        <button onClick={navigateHandler}> Navigate </button>
    </div>
}

export default HomePage;