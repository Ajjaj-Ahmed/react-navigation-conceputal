import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import Footer from "../Footer/Footer";

const Main = () => {
    const loader = useLoaderData();
    console.log(loader)
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;