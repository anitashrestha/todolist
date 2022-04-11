import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";

const Todolist = ({ todos = [] }) => (
	<div className="list-wrapper">
		<NewTodoForm />
		{todos.map((todo) => (
			<TodoListItem todo={todo} />
		))}
	</div>
);
export default Todolist;
