import React from 'react';
import './Task.css';
const Task = ({ task, removeTask }) => {
return (
<li>
{task}
<button onClick={removeTask}>Remove</button>
</li>
 );
};
export default Task;
