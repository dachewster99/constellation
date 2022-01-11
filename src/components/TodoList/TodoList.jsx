import React, { useState } from 'react';
import { Todo } from './components';
import { useSelector, useDispatch } from 'react-redux';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import {
	IconButton,
	Tab,
	Tabs,
	makeStyles,
} from '@material-ui/core';
import { toggleById } from '../../features/todoList/todoSlice';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(() => ({
	iconButton: {
		backgroundColor: 'lightSalmon',
		color: 'white',
		position: 'relative',
		top: '24px',
		'&:hover': {
			backgroundColor: 'salmon'
		}
	},
}))

const TodoList = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { todos } = useSelector(state => state.todos);
	const [tab, setTab] = useState('showAll');

	const handleTabClick = (event, newVal) => {
		setTab(newVal);
	}

	const completeTodo = id => {
		dispatch(toggleById(id))
	};

	return (
		<div className="container">
			<Tabs
				centered
				onChange={handleTabClick}
				value={tab}
			>
				<Tab icon={<FormatListBulletedIcon />} value="showAll" />
				<Tab icon={<EventAvailableIcon />} value="showCompleted" />
			</Tabs>
			{todos
				.filter(todo => tab === "showAll"
					? todo
					: todo.isCompleted)
				.map((todo) => (
					<Todo
						{...todo}
						key={todo.id}
						completeTodo={completeTodo}
					/>
				))}
			<div>
				<IconButton
					className={classes.iconButton}
					variant='contained'
				>
					<AddIcon />
				</IconButton>
			</div>
		</div>
	)
}

TodoList.propTypes = {

}

export default TodoList;