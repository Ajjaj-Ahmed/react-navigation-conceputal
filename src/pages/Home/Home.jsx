import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { dataContext } from "../../provider/DataProvider";
// import { Link } from "react-router-dom";

const Home = () => {

    const { user, arr, setUser, setArr,text,setText } = useContext(dataContext);


    const handleChangeText =(para)=>{
        setText(para)
    }


    return (
        <div>
            <div className="flex items-center justify-center gap-6">
                <NavLink className={`bg-green-400 rounded-lg p-4`} to='/'>Button One</NavLink>
                <NavLink className={`bg-red-400 rounded-lg p-4`} to='/buttonTwo'>Button Two</NavLink>
                <NavLink onClick={()=>handleChangeText('Click Done')} className={`bg-pink-400 rounded-lg p-4`} to='/buttonTwo'>{text}</NavLink>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
