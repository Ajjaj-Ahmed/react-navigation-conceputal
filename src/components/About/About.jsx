import { Link, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const About = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <Navbar></Navbar>
            <h2>About Page</h2>
            <Link to={'/'}>Home</Link>
        </div>
    );
};

export default About;