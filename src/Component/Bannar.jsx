import img1 from "../assets/basketball_sport_icon_in_minimalist_3d_render_2 1.png"
import img2 from "../assets/basketball-player-action-sunset 1.png"
const Bannar = () => {
    return (
        <div className="md:flex bg-gray-300 ">
            <div className="hero relative  pl-20 pt-5 justify-start flex-1">
                <img className="" src={img1} alt="" />
                <div className="text-4xl md:text-5xl lg:text-7xl absolute text-gray-700 pr-6 md-[100px] lg:pr-[140px] font-extrabold ">
                    TOP <br /> SCORER TO <br /> THE FINAL <br /> MATCH
                </div>

            </div>
            <div className="flex-1 ">
                <img className="w-full h-full" src={img2} alt="" />
            </div>
        </div>
    );
};

export default Bannar;