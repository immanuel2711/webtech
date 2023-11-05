import React, { Component } from 'react';
import TaskList from './TaskList';
import './Task.css';
class App extends Component {
constructor() {
super();
this.state = {
tasks: [],
newTask: '',
 };
 }
addTask = () => {
if (this.state.newTask.trim() === '') return;
this.setState((prevState) => ({
tasks: [...prevState.tasks, this.state.newTask],
newTask: '',
 }));
 };
removeTask = (index) => {
const newTasks = [...this.state.tasks];
newTasks.splice(index, 1);
this.setState({ tasks: newTasks });
 };
handleInputChange = (event) => {
this.setState({ newTask: event.target.value });
 };
render() {
return (
<div>
<h1>To DO List</h1>
<input
type="text"
placeholder="Add a new task"
value={this.state.newTask}
onChange={this.handleInputChange}
/>
<button onClick={this.addTask}>Add</button>
<TaskList tasks={this.state.tasks} removeTask={this.removeTask} />
</div>
 );
 }
}
export default App;
