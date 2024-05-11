import { Link } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import moment from "moment";
import Swal from "sweetalert2";

const Blog = ({ blog }) => {
    const { user, addWishlist } = useAuth();
  const { image_url, title, short_description, category, _id } = blog;

  const dateAndTime = moment().format("L, h:mm a");
  //   console.log(dateAndTime);
  const data = {
    image_url,
    title,
    short_description,
    category,
    email: user?.email,
    dateAndTime,
  };

  const handleWishList = () => {
    addWishlist(data)
    .then((res) => {
      console.log(res.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your wishlist has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      
    });
  };
  return (
    <div>
      <div
        key={_id}
        className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pr-5 mt-10 ml-3"
      >
        <div className="flex flex-col items-center ">
          <div className="max-w-xl h-[520px] p-4 rounded-md shadow-md dark:bg-red-200 dark:text-gray-900">
            <img
              src={image_url}
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-default-600 ">
                Category:
                <span className="text-sm font-bold tracking-widest uppercase dark:text-default-600">
                  {category}.
                </span>
              </span>
              <h2 className="text-xl font-extrabold tracking-wide">
                {title}
              </h2>
            </div>
            <div className="mb-2 ">
              <p className="text-sm dark:text-gray-600">
                {short_description}
              </p>
            </div>
            <div className="flex gap-2 justify-around">
              <Link to={`/Details/${_id}`}>
                <button className="btn bg-green-400 rounded-full w-28 justify-center border-b-4 border-sky-500 hover:border-fuchsia-600 hover:bg-sky-500 hover:text-white">
                  Details
                </button>
              </Link>

              <button
                onClick={handleWishList}
                className="btn bg-green-400 rounded-full w-28  justify-center border-b-4 border-sky-500 hover:border-fuchsia-600 hover:bg-sky-500 hover:text-white"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
