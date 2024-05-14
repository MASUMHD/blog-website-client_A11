import { useLoaderData } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import Swal from "sweetalert2";

const Update = () => {
  const { user } = useAuth();
  const blogsData = useLoaderData();

  const {
    title,
    category,
    short_description,
    long_description,
    image_url,
    _id,
  } = blogsData;

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const short_description = form.short_description.value;
    const long_description = form.long_description.value;
    const image_url = form.imageURL.value;
    const newBlog = {
      title,
      category,
      short_description,
      long_description,
      image_url,
      name: user?.displayName,
      email: user?.email,
      userImage: user?.photoURL,
    };
    console.log("nnnnnnnnnnn", newBlog);
    // send data to server
    fetch(`https://blogs-news-pi.vercel.app/allBlogs/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Update successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div className="mt-10 mb-8">
        <h1 className="text-5xl font-bold text-center mb-5">
          Update Blog Post{" "}
        </h1>
        <section className="p-6 rounded-2">
          <form
            onSubmit={handelSubmit}
            noValidate=""
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid  gap-6 p-6 mx-auto rounded-xl shadow-2xl shadow-black border-4 border-black bg-slate-100">
              <div className="grid grid-cols-12 gap-4 col-span-full lg:col-span-6">
                <div className="col-span-full sm:col-span-6">
                  <label htmlFor="firstname" className="text-xl">
                    Title
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="title"
                    defaultValue={title}
                    placeholder="Title"
                    className="w-full p-2 rounded-md border-2 border-gray-500"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-xl">
                    Category
                  </label>

                  <select
                    id=""
                    name="category"
                    defaultValue={category}
                    placeholder="Select your customization"
                    type="text"
                    className="w-full p-2 rounded-md border-2 border-gray-500"
                  >
                    <option value="celtic">Celtic your category</option>
                    <option value="Basketball">Basketball</option>
                    <option value="Running">Running</option>
                    <option value="Soccer">Soccer</option>
                    <option value="Tennis">Tennis</option>
                    <option value="Football">Football</option>
                    <option value="Swimming">Swimming</option>
                    <option value="Volleyball">Volleyball</option>
                  </select>
                </div>

                <div className="col-span-full ">
                  <label htmlFor="firstname" className="text-xl">
                    Short description
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="short_description"
                    defaultValue={short_description}
                    placeholder="Short description"
                    className="w-full p-2 rounded-md border-2 border-gray-500"
                  />
                </div>
                <div className="col-span-full ">
                  <label htmlFor="firstname" className="text-xl">
                    Long description
                  </label>
                  <textarea
                    id="firstname"
                    type="text"
                    name="long_description"
                    defaultValue={long_description}
                    placeholder="Long description"
                    className="w-full p-2 rounded-md h-32 border-2 border-gray-500"
                  ></textarea>
                </div>
                <div className="col-span-full">
                  <label htmlFor="address" className="text-xl">
                    Image URL
                  </label>
                  <input
                    id="address"
                    type="text"
                    name="imageURL"
                    defaultValue={image_url}
                    placeholder="Image URL"
                    className="w-full p-2 rounded-md border-2 border-gray-500"
                  />
                </div>

                <div className="col-span-full">
                  <input
                    className="btn btn-outline btn-success border-2 bg-green-100 text-xl w-full"
                    type="submit"
                    value="Update"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Update;
