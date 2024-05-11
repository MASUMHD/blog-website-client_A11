import { Outlet } from "react-router-dom";
import NabBar from "./Component/NabBar";
import Footer from "./Component/Footer";
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <ToastContainer />
            <NabBar/>
            <Outlet/>
            <Footer/>


        </div>
    );
};

export default Root;