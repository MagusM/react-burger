import ThenPromise from 'promise';
import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

    //will run on every render and rerender cycle, like componentDidUpdate hook
    //we can have many useEffect hooks
    //passing [] empty will make useEffect run only once
    useEffect(() => {
        console.log('[Cockpit.js] useEffect called');
        setTimeout(() => {
            alert('[Cockpit.js] saved data to cloud');
        }, 1000)
    }, []);

    const assignClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
      assignClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignClasses.join(' ')}>Hey, I'ts working!</p>
            <button className={btnClass}
              onClick={props.clicked}
            >
                Toggle persons
            </button>
        </div>
    );
};

export default cockpit;