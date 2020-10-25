// Core
import React, { useState } from 'react';

// Styles
import Styles from './styles.module.scss';

export const ExampleChild = ({ className, task }) => {
    return (
        <section className={[Styles.container, className].filter(Boolean).join(' ')}>
            <img
                src='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
                alt=''
            />
            <p>{task}</p>
        </section>
    );
};
