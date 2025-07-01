import { useState, useEffect } from "react";

function Tasks() {
  //hook - useState
  const [task, setTask] = useState("");

  // create hook state untuk handle array
  const [tasks, setTasks] = useState([]);

  // 1. add a button to add the task
  const handleAddTask = () => {
    // ... adalah untuk repopulate array existing
    // 2. add the task to an array of tasks (with property {done, textTask})
    setTasks([...tasks, { done: false, taskText: task }]);
  };

  // 3. update the done property of the task
  const handleUpdateTask = (index) => {
    ////ambil data yang mau diupdate berdasarkan index, dengan filter function
    //const taskToUpdate = tasks.filter((eachTask, taskIndex) => taskIndex === index)[0];

    //cara lain dengan menggunakan fungsi map
    const newTask = tasks.map((eachTask, taskIndex) => {
      if (taskIndex === index) {
        return {
          done: !eachTask.done,
          taskText: eachTask.taskText,
        };
      } else {
        return eachTask;
      }
    });

    setTasks(newTask);
  };

  // digunakan untuk proses yang membutuhkan notif, simpan ke local storage.
  // fungsi ini seperti render dan prerender di angular
  useEffect(() => {
    alert("congrat add or update.");
  }, [tasks]);

  return (
    <div className="App">
      <h1>React Course 01</h1>
      <div className="inputContainer">
        <input
          className="input"
          placeholder="Enter new task here"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={(e) => handleAddTask()}>Add Task</button>
      </div>

      {tasks.map((eachTask, index) => {
        return (
          <div className="task">
            <input
              type="checkbox"
              checked={eachTask.done}
              onChange={() => handleUpdateTask(index)}
            />
            <p>
              {index + 1}. {eachTask.taskText}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;
