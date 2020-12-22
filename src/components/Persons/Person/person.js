import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import withClassAsFunction from '../../../hoc/withClassAsFunction';
import Aux from '../../../hoc/Aux';

class Person extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <WithClass classes={classes.Person}>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                />
            </WithClass>
        )
    }

    // render() {
    //     return (
    //         <Aux>
    //             <p onClick={this.props.click}>
    //                 I'm {this.props.name} and I am {this.props.age} years old!
    //             </p>
    //             <p>{this.props.children}</p>
    //             <input 
    //                 type="text" 
    //                 onChange={this.props.changed} 
    //                 value={this.props.name} 
    //             />
    //         </Aux>
    //     )
    // }

}

Person.propTypes = {
    click: PropTypes.func,
    age: PropTypes.number,
    name: PropTypes.string,
    change: PropTypes.func
};

export default Person;
// export default withClassAsFunction(Person, classes.Person);