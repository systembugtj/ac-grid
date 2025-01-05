import styles from "./styles.module.css";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    data: unknown[];
    columns: ColumnDef<unknown, unknown>[];
}

export function Grid({ className, data, columns, ...restProps }: GridProps) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className={`${className} ${styles.button}`} {...restProps}>
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
        </div>
    );
}
