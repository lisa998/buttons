import "./App.css";
import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

function App() {
  const [count, setCount] = useState(0);
  const [clickable, setClickable] = useState(true);
  const plus = () => {
    setCount((state) => state + 1);
  };
  const clear = () => {
    setCount(0);
  };
  const disable = () => {
    setClickable((state) => !state);
  };

  const buttons = [
    <Button key="one" onClick={plus} disabled={!clickable}>
      CLICK:{count}
    </Button>,
    <Button key="two" onClick={clear}>
      CLEAR
    </Button>,
    <Button key="three" onClick={disable}>
      DISABLE
    </Button>,
  ];

  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
        >
          {buttons}
        </ButtonGroup>
      </Box>
    </div>
  );
}

export default App;
