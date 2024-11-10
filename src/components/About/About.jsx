import { Link, Outlet } from "react-router-dom";


const About = () => {

    return (
        <div>
         
            <h2>About Page</h2>
            <div className="flex justify-center gap-10">
                <Link className="bg-green-400 p-3 rounded-lg" to={'/about'}>About One</Link>
                <Link className="bg-red-400 p-3 rounded-lg" to={'/about/two'}>About two</Link>  
            </div>
            <Outlet></Outlet>
         
        </div>
    );
};

export default About;