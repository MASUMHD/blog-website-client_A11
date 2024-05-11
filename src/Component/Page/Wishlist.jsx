import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Wishlist = () => {
const [wishlist, setWishlistData] = useState([]);

useEffect(() => {
    fetch("http://localhost:5000/wishlist")
        .then((res) => res.json())
        .then((data) => {
            setWishlistData(data);
        });
}, [ wishlist ]);

  const handleDelete = (_id) => {
      
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/wishlist/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                const remaining = wishlist.filter(
                  (product) => product._id !== _id
                );
                setWishlistData(remaining); 
              }
            });
        }
      })
  }


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10  md:ml-20 md:mr-10">
      {wishlist.map((data) => (
        <div key={data._id}>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pr-5 mt-10 ml-3">
            <div className="flex flex-col items-center ">
              <div className="max-w-xl h-[520px] p-4 rounded-md shadow-md dark:bg-red-200 dark:text-gray-900">
                <img
                  src={data.image_url}
                  alt=""
                  className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                />
                <div className="mt-6 mb-2">
                  <span className="block text-xs font-medium tracking-widest uppercase dark:text-default-600 ">
                    Category:
                    <span className="text-sm font-bold tracking-widest uppercase dark:text-default-600">
                      {data.category}.
                    </span>
                  </span>
                  <h2 className="text-xl font-extrabold tracking-wide">
                    {data.title}
                  </h2>
                </div>
                <div className="mb-2 ">
                  <p className="text-sm dark:text-gray-600">
                    {data.short_description}
                  </p>
                </div>
                <div className="flex gap-2 justify-around">
                  <Link to={`/Details/${data._id}`}>
                    <button className="btn bg-green-400 rounded-full w-28 justify-center border-b-4 border-sky-500 hover:border-fuchsia-600 hover:bg-sky-500 hover:text-white">
                      Details
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(data._id)}
                    className="btn bg-green-400 rounded-full w-28  justify-center border-b-4 border-sky-500 hover:border-fuchsia-600 hover:bg-sky-500 hover:text-white"
                  >
                   Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
