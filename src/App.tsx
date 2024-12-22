import { useState, useReducer } from "react";
import "./App.css";
import mockData from "./data/data.json";

// https://nodejs.org/api/packages.html#packages_self_referencing_a_package_using_its_name
import { Button, Label, Input } from "@systembug/ac-grid";

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

type Person = {
    id: number;
    name: string;
    email: string;
    phone: string;
};

const columnHelper = createColumnHelper<Person>();

const columns = [
    columnHelper.accessor("id", {
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
        cell: (info) => info.getValue(),
    }),
    // you can use different aproach here
    columnHelper.accessor((row) => row.email, {
        id: "email",
        cell: (info) => <i>{info.getValue()}</i>,
        header: () => <span>Email</span>,
    }),
    columnHelper.accessor("phone", {
        header: () => "Phone",
        cell: (info) => info.renderValue(),
    }),
];

function App() {
    const [count, setCount] = useState(0);
    const [inputCustomCountValue, setInputCustomCountValue] = useState("");

    const handleClickCustomCount = () => {
        if (inputCustomCountValue === "") {
            setCount((count) => count + 1);
        } else {
            setCount(Number(inputCustomCountValue));
        }
    };

    const [data] = useState(() => [...mockData]);
    const rerender = useReducer(() => ({}), {})[1];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <>
            <div className="flex justify-center h-screen">
                <table className="my-auto border">
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr
                                key={headerGroup.id}
                                className="border-b text-gray-800 uppercase"
                            >
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className="px-4 pr-2 py-4 font-medium text-left"
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
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
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        {table.getFooterGroups().map((footerGroup) => (
                            <tr key={footerGroup.id} className="border-b">
                                {footerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className="px-4 pt-[14px] pb-[18px]"
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .footer,
                                                  header.getContext()
                                              )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </tfoot>
                </table>
                <div className="h-4" />
            </div>
            <button onClick={() => rerender()} className="border p-2">
                Rerender
            </button>
        </>
    );
}

export default App;
