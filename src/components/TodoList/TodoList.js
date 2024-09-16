import TextField from '@mui/material/TextField';
import * as React from 'react';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

function TodoList() {
    const [text, setText] = useState('');
    const [tasks, setTasks] = useState([]);

    const getTask = ({ target }) => {
        setText(target.value);
    }

    const handleClick = () => {
        let idNumber = 0;
        if (tasks.length !== 0) {
            idNumber = Number(tasks[tasks.length - 1].id)
        }
        idNumber++;
        const newTask = {
            id: idNumber,
            taskText: text
        }
        setTasks(prevState => [...prevState, newTask])
        setText('');
    }

    const handleDelete = ({ target }) => {
        const listEl = target.closest('li');
        const listElId = listEl.getAttribute('data-id');
        setTasks(tasks.filter(task => task.id != listElId))
    }

    return (
        <div className='block'>
            <TextField
                id="set-task"
                label="Введите задачу"
                variant="filled"
                onChange={getTask}
                className='set-task'
                value={text}
            />
            <Button variant="contained" onClick={handleClick}>Добавить задачу</Button>
            <ul className='list'>
                {tasks.map(task =>
                    <ListItem disablePadding key={task.id} data-id={task.id}>
                        {task.taskText}
                        <IconButton aria-label="delete" size="small" onClick={handleDelete}>
                            <DeleteIcon fontSize="inherit"  />
                        </IconButton>
                    </ListItem>
                )}
            </ul>
        </div>
    );
}

export default TodoList;