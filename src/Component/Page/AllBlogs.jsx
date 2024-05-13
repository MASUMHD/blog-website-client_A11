import { useLoaderData } from "react-router-dom";
import Blog from "../Blog";
import { useState } from "react";
import axios from "axios";

const AllBlogs = () => {
  const loadedBlogs = useLoaderData();
  const [blogs, setBlogs] = useState(loadedBlogs);

  const handleSearchInputChange = e => {
    e.preventDefault();
    const search = e.target.search.value;
    if(search === "") {
      setBlogs(loadedBlogs);
    }
    else {
      axios(`http://localhost:5000/all?search=title=${search}`)
      .then(res => {
        setBlogs(res.data)
      })
      .catch(error =>{
        console.error(error);
      })
    }
  }

  

  return (
    <div>
      <div className="mt-16 mb-5 text-center ">
        <div className=" ">
          <form onSubmit={handleSearchInputChange}>
            <input
              className="border-2  text-base pl-5 border-black w-1/2 md:w-1/5 p-2 rounded-l-full"
              type="search"
              name="search"
              placeholder="Type to Search"
              id=""
              // value={searchQuery}
              // onChange={handleSearchInputChange}
            />
            <input
              className="btn-outline btn-success text-lg text-white  w-1/5 md:w-1/12 border-4 rounded-r-full h-11"
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20  md:ml-20 md:mr-10">
        { blogs.length === 0 ? <p>No blogs found.</p> :
        blogs.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
