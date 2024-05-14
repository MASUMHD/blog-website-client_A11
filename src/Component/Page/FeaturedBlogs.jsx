import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { useLoaderData } from "react-router-dom";

const FeaturedBlogs = () => {
  const blogs = useLoaderData();
  // console.log(blogs)

  const blogsCount = blogs.map(blog => ({
    ...blog,wordCount: blog.long_description.split('').length
  }))
  const sortedBLogs = blogsCount.sort((a, b) => b.wordCount - a.wordCount)
  const topBlogs = sortedBLogs.slice(0, 10)

  const data = useMemo(() => topBlogs, [topBlogs]);


  const columns = [
    {
      header: "No",
      cell: (info) => {
        return info.row.index + 1;
      },
    },
    {
      header: "Profile Picture",
      accessorKey: "userImage",
      cell: (info) => {
        return (
          <div className="mask mask-squircle w-12 h-12">
            <img src={info.getValue()} alt="Avatar Tailwind CSS Component" />
          </div>
        );
      },
    },
    {
      header: "Blog Title",
      accessorKey: "title",
    },
    {
      header: "Blog owner",
      accessorKey: "name",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      {/* <h1>Featured Blogs {blogs.length}</h1> */}

      <div className="overflow-x-auto mt-12 mb-6 rounded-xl md:ml-20 md:mr-20 w3-container">
        <table className="w3-table-all">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
