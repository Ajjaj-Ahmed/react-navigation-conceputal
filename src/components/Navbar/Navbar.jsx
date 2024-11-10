import { NavLink} from "react-router-dom";

const Navbar = () => {
  
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink >Dashboard</NavLink></li>
    </>
    
    return (
        <div className={`flex justify-between items-center bg-pink-200 p-10`}>
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