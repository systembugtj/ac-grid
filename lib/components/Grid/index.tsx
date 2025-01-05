import { useMemo, useState } from "react";
import styles from "./styles.module.css";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import {
    closestCenter,
    DndContext,
    DragEndEvent,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    UniqueIdentifier,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
    restrictToHorizontalAxis,
    restrictToVerticalAxis,
} from "@dnd-kit/modifiers";
import { DraggableTableHeader } from "../DraggableTableHeader";

import { DraggableRow } from "../DraggableRow";
import { DragAlongCell } from "../DragAlongCell";

interface GridProps<T> extends React.HTMLAttributes<HTMLDivElement> {
    data: T[];
    columns: ColumnDef<T, number>[];
}

export function Grid<T extends { userId: string }>({
    className,
    data,
    columns,
    ...restProps
}: GridProps<T>) {
    const [columnOrder, setColumnOrder] = useState<string[]>(() =>
        columns.map((c) => c.id!)
    );

    const [gridData, setGridData] = useState(data);
    const table = useReactTable({
        // minimal options
        data: gridData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        // DnD
        state: {
            columnOrder,
        },
        onColumnOrderChange: setColumnOrder,
        debugTable: true,
        debugHeaders: true,
        debugColumns: true,
        // Row DnD
        getRowId: (row: T) => row.userId, //required because row indexes will change
    });

    // reorder columns after drag & drop
    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            setColumnOrder((columnOrder) => {
                const oldIndex = columnOrder.indexOf(active.id as string);
                const newIndex = columnOrder.indexOf(over.id as string);
                return arrayMove(columnOrder, oldIndex, newIndex); //this is just a splice util
            });
        }
    }
    // reorder rows after drag & drop
    function handleCellDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            setGridData((data) => {
                const oldIndex = dataIds.indexOf(active.id);
                const newIndex = dataIds.indexOf(over.id);
                return arrayMove(data, oldIndex, newIndex); //this is just a splice util
            });
        }
    }

    const sensors = useSensors(
        useSensor(MouseSensor, {}),
        useSensor(TouchSensor, {}),
        useSensor(KeyboardSensor, {})
    );

    const dataIds = useMemo<UniqueIdentifier[]>(
        () => gridData?.map(({ userId }) => userId),
        [gridData]
    );

    return (
        // NOTE: This provider creates div elements, so don't nest inside of <table> elements
        <DndContext
            collisionDetection={closestCenter}
            modifiers={[restrictToHorizontalAxis]}
            onDragEnd={handleDragEnd}
            sensors={sensors}
        >
            <div className={`${className} ${styles.grid}`} {...restProps}>
                <div className="flex justify-center h-screen">
                    <table className="my-auto border">
                        <thead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    <SortableContext
                                        items={columnOrder}
                                        strategy={horizontalListSortingStrategy}
                                    >
                                        {headerGroup.headers.map((header) => (
                                            <DraggableTableHeader
                                                key={header.id}
                                                header={header}
                                            />
                                        ))}
                                    </SortableContext>
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            <DndContext
                                collisionDetection={closestCenter}
                                modifiers={[restrictToVerticalAxis]}
                                onDragEnd={handleCellDragEnd}
                                sensors={sensors}
                            >
                                <SortableContext
                                    items={dataIds}
                                    strategy={verticalListSortingStrategy}
                                >
                                    {table.getRowModel().rows.map((row) => (
                                        <DraggableRow key={row.id} row={row}>
                                            {row
                                                .getVisibleCells()
                                                .map((cell) => (
                                                    <SortableContext
                                                        key={cell.id}
                                                        items={columnOrder}
                                                        strategy={
                                                            horizontalListSortingStrategy
                                                        }
                                                    >
                                                        <DragAlongCell
                                                            key={cell.id}
                                                            cell={cell}
                                                        />
                                                    </SortableContext>
                                                ))}
                                        </DraggableRow>
                                    ))}
                                </SortableContext>
                            </DndContext>
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
        </DndContext>
    );
}
