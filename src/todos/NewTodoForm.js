import React, { useState } from "react";
import { connect } from "react-redux"; //Connect is higher order function with 2 diff sets of arguments.
//connect()(NewTodoForm) second argument is the component that we want to connect to the Redux store.
import { createTodo } from "./actions";
import "./NewTodoForm.css";

const NewTodoForm = ({ todos, onCreatePressed }) => {
	const [inputValue, setInputValue] = useState("");
	return (
		<div className="new-todo-form">
			<input
				className="new-todo-input"
				type="text"
				placeholder="Type your new todo here"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button
				onClick={() => {
					//to avoid duplicate text inputs
					const isDuplicateText = todos.some(
						(todo) => todo.text === inputValue
					);
					if (!isDuplicateText) {
						onCreatePressed(inputValue);
						setInputValue(""); //clear the content of input box
					}
				}}
				className="new-todo-button"
			>
				Create Todo
			</button>
		</div>
	);
};

const mapStateToProps = (state) => ({
	todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
	onCreatePressed: (text) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
