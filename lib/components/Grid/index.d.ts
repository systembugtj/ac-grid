import { ColumnDef } from '@tanstack/react-table';
interface GridProps<T> extends React.HTMLAttributes<HTMLDivElement> {
    data: T[];
    columns: ColumnDef<T, number>[];
}
export declare function Grid<T>({ className, data, columns, ...restProps }: GridProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
