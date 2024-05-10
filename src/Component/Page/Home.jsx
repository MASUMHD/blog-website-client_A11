import { useLoaderData } from "react-router-dom";
import Bannar from "../Bannar";
import SingleBlogs from "../SingleBlogs";

const Home = () => {
    const blogs = useLoaderData();
  return (
    <div>
      <Bannar />
      <div className="mt-16 mb-14">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center">
          <span className="">Recent</span> Blog <br />{" "}
          <span className="text-fuchsia-500">Posts</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10  md:ml-20 md:mr-10">
        {
          blogs.slice(0, 6).map((blog) => (
              <SingleBlogs key={blog._id} blog={blog} ></SingleBlogs>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
