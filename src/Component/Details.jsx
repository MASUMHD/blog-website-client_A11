import { useLoaderData } from "react-router-dom";

const Details = () => {
  const vewDetails = useLoaderData();
  console.log(vewDetails);
  const { title, category, short_description, long_description, image_url } =
    vewDetails;
  return (
    <div className="">

      <section className="dark:bg-gray-100 dark:text-gray-800 md:ml-20 md:mr-20 mt-10 rounded-2xl">
        <div className="container gap-5 md:gap-0 flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
          <div className="flex md:pt-36 items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={image_url}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <span className="-mt-16 mb-5 text-lg font-bold uppercase dark:text-gray-600">  {category}  </span>
            <h1 className="text-5xl font-bold leading-none sm:text-4xl">
              {title}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-2 font-bold">
              {short_description}
            </p>
            <p className="mt-2  text-lg ">
              {long_description}
            </p>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
