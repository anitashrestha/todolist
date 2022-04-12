export const CREATE_TODO = "CREATE_TODO";

//export JSON which have payload ehich will contain the text of the new to do

export const createTodo = (text) => ({
	type: "CREATE_TODO",
	payload: { text },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
	type: "REMOVE_TODO",
	payload: { text },
});
