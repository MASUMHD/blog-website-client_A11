import { Link, useLoaderData } from "react-router-dom";
import Bannar from "../Bannar";
import SingleBlogs from "../SingleBlogs";
import NewsletterSection from "../NewsletterSection";
import OurTem from "../OurTem";
import { HiArrowSmRight } from "react-icons/hi";
import Last from "../Last";

const Home = () => {
  const blogs = useLoaderData();

  return (
    <div>
      <Bannar />
      <div className="mt-20 mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          <span className="">Recent</span> Blog <br />{" "}
          <span className="text-fuchsia-500">Posts</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10  md:ml-20 md:mr-10">
        {blogs.slice(0, 6).map((blog) => (
          <SingleBlogs key={blog._id} blog={blog}></SingleBlogs>
        ))}
      </div>
      <div className="text-center mb-20 ">
        <Link to="/allblogs" className="btn btn-outline btn-success text-lg ">
          See All<span className="text-2xl"><HiArrowSmRight /></span>
        </Link>
      </div>
      <div className="mb-16 text-2xl md:text-3xl lg:text-5xl font-bold  text-center">
        Sing up for your <span>Newsletter</span>
      </div>
      <NewsletterSection />
      <div className="md:ml-20 md:mr-20 mt-16">
        <OurTem></OurTem>
      </div>
      <div className="md:ml-20 md:mr-20 mt-16">
        <Last />
      </div>
    </div>
  );
};

export default Home;
