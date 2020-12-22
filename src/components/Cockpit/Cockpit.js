import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';

import classes from './Cockpit.css';

const cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    //will run on every render and rerender cycle, like componentDidUpdate hook
    //we can have many useEffect hooks
    //passing [] empty will make useEffect run only once
    useEffect(() => {
        console.log('[Cockpit.js] useEffect called');
        // setTimeout(() => {
        //     alert('[Cockpit.js] saved data to cloud');
        // }, 500);

        //this return function is like componentWillUnmount hook, runs after the render cycle.

        toggleBtnRef.current.click();

        return () => {
            console.log('[Cockpit.js] cleanup effect called');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect called');

        return () => {
            console.log('[Cockpit.js] cleanup in 2nd effect called');
        }
    });

    const assignClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.personsLength <= 2) {
      assignClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
      assignClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignClasses.join(' ')}>Hey, I'ts working!</p>
            <button className={btnClass}
              onClick={props.clicked}
              ref={toggleBtnRef}
            >
                Toggle persons
            </button>
            {<button onClick={authContext.login}>Login in</button>}
        </div>
    );
};

//React.memo is optimization for functional components
export default React.memo(cockpit);