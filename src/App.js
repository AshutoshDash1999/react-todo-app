import React, { useState } from "react";
import { TextField, Button, Stack, Grid, Box, Checkbox } from "@mui/material";
import "./App.css";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDateTimePicker from "@mui/lab/MobileDateTimePicker";
import DeleteIcon from "@mui/icons-material/Delete";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [dateValue, setDateValue] = useState(new Date().toString());
  const [isLineThrough, setLineThrough] = useState(false);
  const colors = [
    "red-200",
    "orange-200",
    "amber-200",
    "yellow-200",
    "lime-200",
    "green-200",
    "emerald-200",
    "teal-200",
    "cyan-200",
    "violet-200",
    "purple-200",
    "fuchsia-200",
    "pink-200",
    "rose-200",
    "indigo-200",
    "blue-200",
    "cyan-200",
  ];

  const clickHandler = () => {
    // todoList.push(userInput)
    if (userInput.length > 0) {
      setTodoList([...todoList, userInput]);
      setUserInput("");
    }
  };

  window.addEventListener("keypress", function keyPressHandler(e) {
    // console.log(e.key);
    if (e.key === "Enter") {
      clickHandler();
    }
  });

  const delTodo = (event) => {
    setTodoList((prevState) =>
      prevState.filter((item) => item !== event.target.value)
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Stack direction="row" spacing={2}>
            <TextField
              type="text"
              label="Add new ToDo"
              variant="filled"
              onChange={(e) => setUserInput(e.target.value)}
              value={userInput}
            />
            <MobileDateTimePicker
              label="Choose Due Date Time"
              value={dateValue}
              onChange={(e) => setDateValue(e)}
              renderInput={(params) => <TextField {...params} />}
              disablePast
            />
            <Button variant="contained" onClick={clickHandler}>
              Add ToDo
            </Button>
          </Stack>
          <ul>
            {todoList.map((item, index) => {
              return (
                <li key={index}>
                  {/* <button onClick={(e) => delTodo(e)} value={item}>
                  Del
                </button> */}
                  <Box
                    className={`bg-gradient-to-r from-${
                      colors[Math.floor(Math.random() * colors.length)]
                    } to-${colors[Math.floor(Math.random() * colors.length)]}`}
                    style={{ margin: "1rem" }}
                    sx={{
                      minWidth: 300,
                      backgroundColor:
                        colors[Math.floor(Math.random() * colors.length)],
                      borderRadius: "10px",
                      padding: "1rem",
                      overflowWrap: "break-word",
                    }}
                  >
                    <Grid
                      container
                      spacing={2}
                      sx={{ display: "flex", justifyContent: "space-around" }}
                    >
                      <Grid item xs={1} container>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                          }}
                        >
                          <Checkbox
                            onChange={(e) => setLineThrough(e.target.checked)}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={9} container>
                        <Box
                          className={isLineThrough ? "line-through" : ""}
                          sx={{
                            color: "text.primary",
                            fontSize: 34,
                            fontWeight: "medium",
                            flexWrap: "wrap",
                          }}
                        >
                          {item}
                        </Box>
                        <Box
                          className={isLineThrough ? "line-through" : ""}
                          sx={{
                            color: "text.secondary",
                            display: "inline",
                            fontSize: 16,
                            flexWrap: "wrap",
                          }}
                        >
                          Due by {dateValue.toString()}
                        </Box>
                      </Grid>
                      <Grid item xs={2} container>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                          }}
                        >
                          <Button
                            onClick={(e) => delTodo(e)}
                            value={item}
                            color="error"
                            variant="outlined"
                          >
                            Delete
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </li>
              );
            })}
          </ul>
        </Grid>
      </div>
    </LocalizationProvider>
  );
};

export default App;
