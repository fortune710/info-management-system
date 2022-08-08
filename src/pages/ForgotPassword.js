import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import Firebase from '../firebase-init';
import { useForm } from 'react-hook-form';


import FormInput from '../components/FormInput/FormInput';
import Modal from '../components/Modal/Modal';
import React, { useState } from 'react';


const ForgotPasswordPage = () => {
    const { register, handleSubmit, getValues } = useForm({
        defaultValues: {
            email: ''
        }
    });

    const submitEmail = () => {
        const {email} = getValues();
        setModalOpen(true)
    }

    const [modalOpen, setModalOpen] = useState(false)

    return(
        <React.Fragment>
            
        <main>
            <form onSubmit={handleSubmit()}>
                <FormInput
                    register={register}
                    placeholder="Enter the email for this account"
                    type="email"
                    name={'email'}
                    />

                <button type='submit'>
                    Submit
                </button>
            </form>

          

        </main>
    </React.Fragment>
    )
}

export default ForgotPasswordPage;