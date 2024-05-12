import { useLoaderData } from "react-router-dom";



const FeaturedBlogs = () => {
  const blogs = useLoaderData();

  console.log(blogs)
 

  return (
    <div>
      <h1>Featured Blogs {blogs.length}</h1>

      <div>
        <div className="p-2">
          <div className="overflow-x-auto mt-5 mb-8  rounded-xl bg-green-200 md:ml-20 md:mr-20">
            <table className="table">
              {/* head */}
              <thead className="bg-base-300">
                <tr className="text-black text-xl">
                  <th></th>
                  <th > Profile Picture</th>
                  <th className="text-center">Blog Title</th>
                  <th className="text-center">Blog owner</th>
                </tr>
              </thead>

              {/* row 1 */}
              {blogs.map((item, index) => (
                <tbody key={item._id}>
                  <tr className="bg-base-200 text-lg">
                    <th> {index + 1}</th>
                    <div className="mask mask-squircle item-center justify-center ml-12 text-center  w-12 h-12">
                      <img className="text-center"
                        src={item.userImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                    <td className="text-center">{item.title}</td>
                    
                    <td className="text-center">{item.name}</td>
                  </tr>
                  <hr className="border-2" />
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
