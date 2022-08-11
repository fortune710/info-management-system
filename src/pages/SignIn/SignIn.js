//import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

//Component Imports
import FormInput from '../../components/FormInput/FormInput';
import Modal from '../../components/Modal/Modal';

import Button from '../../components/Button/Button';

import Login from '../../assets/login.webp';

//Firebase App Config
//import Firebase from '../firebase-init';

import './signin.styles.scss';

const SignInPage = () => {
    //const auth = getAuth(Firebase);
    const { register, getValues, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const router = useNavigate();

    const completeSignIn = () => {
        const { email, password } = getValues();
        router('/dashboard/home', { replace: true })
        
        /*
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
        
        })
        .catch((err) => {
            switch(err.code){
                
            }
        }*/
        
    }

    return(
        <main>
            <img src={Login} alt={'People holding key and padlock'} />

            <form onSubmit={handleSubmit(completeSignIn)}>
                <FormInput 
                    register={register}
                    name={'email'} 
                    type="email" 
                    placeholder="Please enter your email"
                    errorMessage={'Not a valid email'}
                />

                <FormInput 
                    register={register}
                    name={'password'} 
                    type="password" 
                    placeholder="Please enter your email"
                />

                <Button color={'primary'} type='submit'>
                    Login
                </Button>

            </form>

            <Link to={'/forgot-password'}>
                Forgot Password?
            </Link>

        </main>
    )


}

export default SignInPage;