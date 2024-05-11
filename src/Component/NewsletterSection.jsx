import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NewsletterSection = () => {

  const notify = () => toast("Thank you for subscribing to our newsletter!");
    
  return (
    
    <div className="grid md:bg-gray-200 mb-[450px] p-3 md:mb-0  grid-cols-1 md:grid-cols-3 border-2 rounded-2xl h-96 md:w-1/2  mx-auto">
      <div className="border-r-2 bg-[#609beb] rounded-2xl ">
        <img
          className="rounded-2xl mt-14"
          src="https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454731_640.png"
          alt=""
        />
      </div>
      <div className="">
        <h1 className="ml-8 md:ml-32 text-5xl font-extrabold text-center mt-20">
          Subscribe!
        </h1>
        <div>
            <input className=" md:ml-32 mt-10 border-4 border-[#609beb]  rounded-3xl w-full p-2" type="email" name="" placeholder="Enter your email" id="" />
            <input onClick={notify} className=" md:ml-32 mt-5 border-4 border-white  rounded-3xl w-full p-2 bg-[#609beb] btn" type="submit" value="Subscribe" />
        </div>
        
      </div>
    </div>
  );
};

export default NewsletterSection;
