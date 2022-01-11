import React from 'react';
import { Checkbox, FormControlLabel, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	checkbox: {
		'&.checked': {
			textDecorationLine: 'line-through',
		}
	}
}))


const Todo = ({ completeTodo, id, isCompleted, text }) => {
	const classes = useStyles();
	const checked = isCompleted ? 'checked' : ''

	return (
		<FormControlLabel
			className={`${classes.checkbox} ${checked}`}
			control={
				<Checkbox
					checked={isCompleted}
					onChange={() => completeTodo(id)}
					color="primary"
				/>
			}
			label={text}
		/>
	)
}

export default Todo;