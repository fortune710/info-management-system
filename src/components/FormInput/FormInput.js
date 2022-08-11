import { useForm } from "react-hook-form";
import React from "react";

import './form-input.styles.scss';

const FormInput = ({ register, name, errorMessage ,...otherProps }) => {

    return(
        <div className="input-group">
            <label htmlFor={name}>{name}</label>
            <input 
                name={name}
                {...register(name, 
                    { required: errorMessage })} 

                {...otherProps}
            />
            <p className="error-message">{ errorMessage }</p>
            
        </div>
    )
}

export default FormInput;