import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
    const location = useLocation();
    console.log(location)
    
    return (
        <div>
            <Navbar></Navbar>
            <h2>Home Page</h2>
            <Link to={'/about'} >About</Link>
        </div>
    );
};

export default Home;
