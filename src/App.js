import React, { useState } from "react";
import { TextField, Button, Stack, Grid, Box, Dialog, DialogTitle, DialogActions } from "@mui/material";
import "./App.css";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [dateValue, setDateValue] = useState(new Date().toString());
  const [openModal, setOpenModal] = useState(false);
  // const dt = new Date();
  // console.log(typeof(dateValue.toString()));
  const colors = [
    "#fecaca",
    "#fed7aa",
    "#fde68a",
    "#d9f99d",
    "#bbf7d0",
    "#a7f3d0",
    "#99f6e4",
    "#a5f3fc",
    "#bae6fd",
    "#bfdbfe",
    "#c7d2fe",
    "#ddd6fe",
    "#e9d5ff",
    "#fecdd3",
  ];

  const clickHandler = () => {
    // todoList.push(userInput)
    if(userInput.length>0){
      setTodoList([...todoList, userInput]);
      setUserInput("");
    } else {
      setOpenModal(true);
    }
  };

  const delTodo = (event) => {
    setTodoList((prevState) =>
      prevState.filter((item) => item !== event.target.value)
    );
  };

  const closeModal = () => {
    setOpenModal(false)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        {/* <Dialog>
          <DialogTitle>
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogActions>
            <Button onClick={closeModal}>Ok</Button>
          </DialogActions>
        </Dialog> */}
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
              label="Choose Date Time"
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
                    <Grid container spacing={2}>
                      <Grid item xs={8}>
                        <Box
                          sx={{
                            color: "text.primary",
                            fontSize: 34,
                            fontWeight: "medium",
                          }}
                        >
                          {item}
                        </Box>
                        <Box
                          sx={{
                            color: "text.secondary",
                            display: "inline",
                            fontSize: 16,
                          }}
                        >
                          Due by {dateValue.toString()}
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        align="center"
                        justify="center"
                        direction="column"
                        container
                      >
                        <Button onClick={(e) => delTodo(e)} value={item}>
                          Delete
                        </Button>
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
