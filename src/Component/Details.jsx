import { useLoaderData } from "react-router-dom";

const Details = () => {
  const vewDetails = useLoaderData();
  console.log(vewDetails);
  const {
    title,
    category,
    short_description,
    long_description,
    image_url,
    _id,
  } = vewDetails;
  return (
    <div className="">
      <div className="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center">
          <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <span className="text-lg font-medium text-gray-700 dark:text-gray-400"> 
            {category}
          </span>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {short_description}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {long_description}
        </p>
        <img src={image_url} alt="" />
        
        </div>
        
    </div>
  );
};

export default Details;
