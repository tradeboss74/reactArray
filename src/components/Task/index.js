import React, { useState } from 'react';
import { List } from '../List';
import styles from './styles.module.scss';

export const Task = ({ item, deleteTask }) => {
    const [checked, setCheckedType] = useState(false);

    return (
        <div className={styles.container}>
            <input type='checkbox' checked={checked} onChange={() => setCheckedType(!checked)} />
            <span className={`${checked ? styles.completed : styles.bold}`}>{item}</span>
            <img
                className={styles.img}
                src='https://n7.nextpng.com/sticker-png/41/41/sticker-png-red-x-button-icon-error-http-404-icon-red-cross-mark-file-miscellaneous-trademark-heart-sign-thumbnail.png'
                onClick={deleteTask}
            />
        </div>
    );
};
