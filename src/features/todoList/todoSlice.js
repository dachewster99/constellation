import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todos: [{
		id: 0,
		text: "React Hooks in Depth",
		isCompleted: false
	},
	{
		id: 1,
		text: "Write Articles @ Medium",
		isCompleted: false
	},
	{
		id: 2,
		text: "Share article at Reddit",
		isCompleted: true
	}]
};

export const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		toggleById: (state, action) => {
			state.todos.find(x => x.id === action.id).isCompleted = action.isCompleted;
		},
	},
});

export const { toggleById } = todoSlice.actions;

export default todoSlice.reducer;
