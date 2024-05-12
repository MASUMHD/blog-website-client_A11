import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import { Audio } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <div className="text-center text-7xl ml-40 md:ml-60 lg:ml-[700px] mt-20 "><Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      /></div>
    }

    if (!user){
        return <Navigate to="/login" state={location?.pathname || "/"} />
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;