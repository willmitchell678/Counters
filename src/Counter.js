import React, { useState } from "react";
import { Typography, Button } from "@material-ui/core";

export function Counter ({title, step}) {
    console.log (title, step);
    const [value, setValue] = useState(0);

    function increment () {
        setValue(value + step);
    };

    function decrement () {
        setValue(value - step);
    };

    return (
        <>
            <Typography variant="h4" component="h1" gutterBottom>
                {title}
            </Typography>
            <Typography variant="h5" component="h1" gutterBottom>
                {value}
            </Typography>

            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </>
    );
};