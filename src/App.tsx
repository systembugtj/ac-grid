import { useState, useReducer } from "react";
import "./App.css";
import mockData from "./data/data.json";

// https://nodejs.org/api/packages.html#packages_self_referencing_a_package_using_its_name
import { Button, Label, Input, Grid } from "@systembug/ac-grid";

import { createColumnHelper } from "@tanstack/react-table";

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
    // you can use different approach here
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

    return (
        <>
            <Grid data={data} columns={columns} />
            <button onClick={() => rerender()} className="border p-2">
                Rerender
            </button>
            <h1>Vite + React</h1>
            <div className="card">
                <Label>My Label</Label>
                <br />
                <Input
                    placeholder="Custom count"
                    value={inputCustomCountValue}
                    onChange={(e) => setInputCustomCountValue(e.target.value)}
                />
                <br />
                <Button onClick={handleClickCustomCount}>
                    count is {count}
                </Button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
