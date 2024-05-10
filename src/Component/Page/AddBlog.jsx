const AddBlog = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const short_description = form.short_description.value;
    const long_description = form.long_description.value;
    const image = form.imageURL.value;
    const newBlog = {
      title,
      category,
      short_description,
      long_description,
      image,
    };
    console.log(newBlog);
  };
  return (
    <div>
      <div className="mt-1 mb-8">
        <section className="p-6 rounded-2">
          <form
            onSubmit={handelSubmit}
            noValidate=""
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid  gap-6 p-6 mx-auto rounded-md shadow-sm bg-sky-300">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-sm">
                    Title
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="title"
                    defaultValue=""
                    placeholder="Title"
                    className="w-full p-2 rounded-md "
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-sm">
                    Category
                  </label>

                  <select
                    id=""
                    name="category"
                    placeholder="Select your customization"
                    type="text"
                    className="w-full p-2 rounded-md "
                  >
                    <option value="celtic">Celtic your category</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div className="col-span-full ">
                  <label htmlFor="firstname" className="text-sm">
                    Short description
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="short_description"
                    placeholder="Short description"
                    className="w-full p-2 rounded-md "
                  />
                </div>
                <div className="col-span-full ">
                  <label htmlFor="firstname" className="text-sm">
                    Long description
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="long_description"
                    placeholder="Long description"
                    className="w-full p-2 rounded-md "
                  />
                </div>

                <div className="col-span-full">
                  <label htmlFor="address" className="text-sm">
                    Image URL
                  </label>
                  <input
                    id="address"
                    type="text"
                    name="imageURL"
                    placeholder="Image URL"
                    className="w-full p-2 rounded-md "
                  />
                </div>

                <div className="col-span-full">
                  <input
                    className="btn bg-rose-500 w-full"
                    type="submit"
                    value="Submit"
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

export default AddBlog;
