// Parameter passing menggunakan Props
// parameternya: {eachTask: {}, handleUpdateTask: () => {}, index: number }

function Task({ eachTask, handleUpdateTask, index }) {
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
}

export default Task;
