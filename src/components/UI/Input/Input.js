import React from 'react';
import './Input.css';

const input = props => {
    let inputElement = null;

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch(props.inputtype) {
        case ('input'):
            inputElement = <input 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>
            break;
        case ('textarea'):
            inputElement = <textarea 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>
            break;
        case ('select'):
                inputElement = 
                    <select 
                        value={props.value}
                        onChange={props.changed}>
                        {props.elementConfig.options.map(option => {
                            return <option key={option.value} value={option.value}>{option.displayValue}</option>
                        })}
                    </select>
                break;
        default:
            inputElement = <input 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>
    };

    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;