import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import withClassAsFunction from '../../../hoc/withClassAsFunction';
import Aux from '../../../hoc/Aux';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        return (
            <WithClass classes={classes.Person}>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
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