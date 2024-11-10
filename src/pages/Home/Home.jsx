import { NavLink, Outlet } from "react-router-dom";
// import { Link } from "react-router-dom";

const Home = () => {
   
    
    return (
        <div>
            <div className="flex items-center justify-center gap-6">
               <NavLink className={`bg-green-400 rounded-lg p-4`} to='/'>Button One</NavLink>
               <NavLink className={`bg-red-400 rounded-lg p-4`} to='/buttonTwo'>Button Two</NavLink>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
