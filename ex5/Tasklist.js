import React from 'react';
import Task from './Task';
import './Task.css';
const TaskList = ({ tasks, removeTask }) => {
return (
<ul>
{tasks.map((task, index) => (
<Task key={index} task={task} removeTask={() => removeTask(index)} />
 ))}
</ul>
 );
};
export default TaskList;
