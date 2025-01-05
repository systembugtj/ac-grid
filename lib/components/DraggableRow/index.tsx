import { useSortable } from "@dnd-kit/sortable";
import { CSSProperties } from "react";
import { CSS } from "@dnd-kit/utilities";
import { Row } from "@tanstack/react-table";

interface DraggableRowProps<T> {
    row: Row<T>;
    children: React.ReactNode;
}

// Row Component
export function DraggableRow<T extends { userId: string }>({
    row,
    children,
}: DraggableRowProps<T>) {
    const { transform, transition, setNodeRef, isDragging } = useSortable({
        id: row.original.userId,
    });

    const style: CSSProperties = {
        transform: CSS.Transform.toString(transform), //let dnd-kit do its thing
        transition: transition,
        opacity: isDragging ? 0.8 : 1,
        zIndex: isDragging ? 1 : 0,
        position: "relative",
    };
    return (
        // connect row ref to dnd-kit, apply important styles
        <tr ref={setNodeRef} style={style}>
            {children}
        </tr>
    );
}
