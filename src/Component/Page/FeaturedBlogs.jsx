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

  const data = useMemo(() => blogs, []);

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
      <h1>Featured Blogs {blogs.length}</h1>

      <div className="overflow-x-auto mt-5 mb-8 rounded-xl md:ml-20 md:mr-20 w3-container">
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
