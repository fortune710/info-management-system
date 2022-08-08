import { useForm } from "react-hook-form";
import React from "react";

const FormInput = ({ register, name, ...otherProps }) => {
    return(
        <React.Fragment>

            <input 
                {...register(name, 
                    { required: 'This field cannot be left blank'})} 

                {...otherProps}/>
        </React.Fragment>
    )
}

export default FormInput;