//import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

//Component Imports

import Login from '../../assets/login.webp';

//Firebase App Config
//import Firebase from '../firebase-init';

import './signin.styles.scss';
import { Button, TextField } from '@mui/material';

const SignInPage = () => {
    //const auth = getAuth(Firebase);
    const { register, getValues, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const router = useNavigate();

    const styles = {
        width: 300,
        margin: '0 auto',
        textTransform: 'capitalize'
    }

    const completeSignIn = () => {
        const { email, password } = getValues();
        router('/dashboard/home')
        
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

            <form onSubmit={handleSubmit(completeSignIn)}>
                <h1>Sign In</h1>
                
                <TextField 
                    {...register('email')} 
                    variant='outlined'
                    type={'email'}
                    label="Email"
                    placeholder="Please enter your email"
                />
                
                <TextField 
                    {...register('password')} 
                    variant='outlined'
                    type={'password'}
                    label="Password"
                    placeholder="Please enter your password"
                />
                
                <Button 
                    sx={styles}
                    variant='contained' 
                    type='submit'>
                    Login
                </Button>
                
                <Button sx={styles} onClick={() => router('/forgot-password')}>
                    Forgot Password ?
                </Button>

                

                
            </form>


        </main>
    )


}

export default SignInPage;