import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { Counter } from "./Counter";
import Grid from "@material-ui/core/Grid";

export default function App () {
  const [step, setStep] = useState(1);

  function handleChange (event, value) {
    setStep(value);

  }
  return (
<div style={{margin: "3em"}}>
    <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <Counter title="Counter 1" step={step} />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Counter title="Counter 2" step={step} />
        </Grid>
        <Grid item xs={12}>
        <Slider
        onChange={handleChange}
        value={step}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
      />
        </Grid>
      </Grid>
      </div>
    );
  };