import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import webName from "../assets/Sport News.png"

const NabBar = () => {
  const { user, logOut } = useAuth();

  const nabLinks = (
    <>
      <li className="text-base mr-2">
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="text-base mr-2">
        <NavLink to="/addblog">Add Blog</NavLink>
      </li>

      <li className="text-base mr-2">
        <NavLink to="/allblogs">All blogs</NavLink>
      </li>
      <li className="text-base mr-2">
        <NavLink to="/featuredblogs">Featured Blogs</NavLink>
      </li>
      <li className="text-base mr-2">
        <NavLink to="/wishlist">Wishlist</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-gray-300">
      <div className=" container mx-auto md:pl-20 md:pr-20 pt-2 ">
        <div className="navbar bg-gray-300">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {nabLinks}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl md:text-3xl md:font-extrabold">
              <Link to="/">
                <img className=" w-24 md:w-44" src={webName} alt="" />
                {/* News <span className="text-green-500">BLOG</span> */}
              </Link>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1">{nabLinks}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="flex items-center gap-2 ">
                {/* theme */}
                {/* <div>
                  <label className="cursor-pointer grid place-items-center">
                    <input
                      onChange={toggleTheme}
                      type="checkbox"
                      // value="synthwave"
                      className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                    />
                    <svg
                      className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="5" />
                      <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <svg
                      className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                  </label>
                </div> */}

                <div className="flex items-center gap-2">
                  <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">
                      <div className="w-12">
                        <img className="rounded-full " src={user?.photoURL} />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-0 md:w-52 "
                    >
                      <li className="rounded-lg bg-green-300 border-2 border-slate-500">
                        <Link to="" className="font-bold">
                          {user?.displayName}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <button onClick={logOut} className="btn btn-error text-white">
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login">
                  <button className="btn bg-violet-400 text-white">
                    Log In
                  </button>
                </Link>
                <Link to="/register">
                  <button className="btn bg-cyan-400 text-white">
                    Register
                  </button>
                </Link>
                {/* <div>
                  <label className="cursor-pointer grid place-items-center">
                    <input
                      onChange={toggleTheme}
                      type="checkbox"
                      // value="synthwave"
                      className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                    />
                    <svg
                      className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="5" />
                      <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <svg
                      className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                  </label>
                </div> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NabBar;
