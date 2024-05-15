import { useQuery } from "@tanstack/react-query";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";

const FeaturedBlogs = () => {
 

  const { data: blogs, isLoading } = useQuery({
    queryKey: ['featuredBlogs'],
    queryFn: async () => {
      const res = await fetch('https://blogs-news-pi.vercel.app/allBlogs')
      return res.json()
    }
  })

  const topBlogs = blogs?.sort((a, b) => b.long_description.length - a.long_description.length).slice(0, 10)

  const data = useMemo(() => topBlogs, [topBlogs])

  const columnHelper = createColumnHelper()
  const columns = [
    columnHelper.accessor('No', {
      cell: info => <span>{info.row.index + 1}</span>,
      header: 'No'
    }),
    columnHelper.accessor('userImage', {
      cell: (info) => <img className="w-8 h-8 md:w-12 md:h-12 rounded-full" src={info.getValue()} />,
      header: 'Profile Picture'
    }),
    columnHelper.accessor('name', {
      cell: info => <span>{info.getValue()}</span>,
      header: 'Name'
    }),
    columnHelper.accessor('title', {
      cell: info => <span>{info.getValue()}</span>,
      header: 'Title'
    }),
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  if (isLoading) {
    return <div className="text-center mt-10 "><span className="loading loading-bars loading-lg text-center"></span></div>
  }

  return (
    <div className="overflow-x-auto mt-12 mb-6 rounded-xl md:ml-20 md:mr-20 w3-container">

      <table className=" w3-table-all">
        <thead>
          {
            table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {
                  headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        <tbody>
          {
            table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {
                  row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default FeaturedBlogs;
