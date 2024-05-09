import { Outlet } from "react-router-dom";
import NabBar from "./Component/NabBar";

const Root = () => {
    return (
        <div>
            <NabBar/>
            <Outlet/>
        </div>
    );
};

export default Root;