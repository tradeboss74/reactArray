import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Task } from '../../components';

// Sever response
import serverResponse from '../../utils/data.json';

export const List = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setTasks(serverResponse);
    }, []);

    const addNewTask = () => {
        // 1) const newArr = [inputValue, ...tasks];
        // 2) const newArr = tasks.concat([inputValue])
        setTasks([inputValue, ...tasks]);
        setInputValue('');
    };

    const deleteTask = (item) => {
        setTasks(tasks.filter((element) => element !== item));
    };

    return (
        <div>
            <input
                value={inputValue}
                onChange={(event) => {
                    // console.log(event.target.value);
                    setInputValue(event.target.value);
                }}
            />
            <button onClick={addNewTask}>New task</button>

            {tasks.map((item, index) => (
                // <div key={index}>{item}</div>
                <Task key={index} item={item} deleteTask={() => deleteTask(item)} />
            ))}
        </div>
    );
};
