import { Row } from '@tanstack/react-table';
interface DraggableTableRowProps<T> {
    row: Row<T>;
    children: React.ReactNode;
}
export declare function DraggableTableRow<T extends {
    userId: string;
}>({ row, children, }: DraggableTableRowProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
