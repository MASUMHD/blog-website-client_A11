import { useLoaderData } from "react-router-dom";
import Blog from "../Blog";

const AllBlogs = () => {
  const blogs = useLoaderData();
  

  return (
    <div>
      <div className="mt-16 mb-5 text-center ">
        <div className=" ">
          <input
            className="border-2  text-base pl-5 border-black w-1/2 md:w-1/5 p-2 rounded-l-full"
            type="search"
            name=""
            placeholder="Type to Search"
            id=""
          />
          <input
            className="btn-outline btn-success text-lg text-white  w-1/5 md:w-1/12 border-4 rounded-r-full h-11"
            type="submit"
            value="Search"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20  md:ml-20 md:mr-10">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
