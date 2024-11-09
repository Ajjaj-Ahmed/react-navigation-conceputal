import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const {pathname} = useLocation();
    // console.log(location.pathname);
    const links = <>
        <li><NavLink>{pathname=== '/about' ? 'About' :'Home'}</NavLink></li>
        <li><NavLink >Statistics</NavLink></li>
        <li><NavLink >Dashboard</NavLink></li>
    </>
    
    return (
        <div className={`flex justify-between items-center
        ${pathname ==='/about'?`bg-green-600`:`bg-pink-200`} `}>
         <h2>Gadget Kind</h2>
         <div className="flex items-center gap-3 list-none">
            {links}
         </div>
         <div className="flex item-center">
            <h2>Cart</h2>
            <h2>Shop</h2>
         </div>
        </div>
    );
};

export default Navbar;