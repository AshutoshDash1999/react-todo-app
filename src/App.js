import React, {useState, useEffect} from "react"
import "./App.css"

export default function App(){
      const [task, setTask] = useState("");
      const [todo, setTodo] = useState([]);

      function addTodo(event) {
        event.preventDefault();
        setTodo((oldTodo) => {
          return [...oldTodo, task];
        });
        setTask("");
      }

      function delTodo(event){
        setTodo((prevState)=>(prevState.filter((item)=>(item!==event.target.value))))
      }


      //instead of keydown try wrapping the code in form

    return (
      <div className="App">
        <h1>ToDo App</h1>

        <form onSubmit={addTodo}>
          <input value={task} onChange={(e) => setTask(e.target.value)} />
          <button class="btn" id="addTodoBtn" type="submit">
            Add ToDo
          </button>
          <button
            class="btn"
            id="clearTodoBtn"
            onClick={() => window.location.reload(false)}
          >
            Clear List
          </button>
        </form>

        <ul>
          {todo.map((task) => {
            return (
              <li className="listStyle">
                <input type="checkbox"/>
                {task} 
                <button
                  onClick={(e) => delTodo(e)}
                  class=""
                  id="removeTodoBtn"
                  value={task}
                >
                   Remove
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
}