// Core
import React, { useState } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import { ExampleChild } from '../ExampleChild';
import testData from '../../utils/data.json';

export const Example = ({ className }) => {
    return (
        <section className={[Styles.container, className].filter(Boolean).join(' ')}>
            {testData.map((item, index) => (
                <ExampleChild key={index} task={item} />
            ))}
        </section>
    );
};
