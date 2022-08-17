import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../utils/firebase.utils';

import { useForm } from 'react-hook-form';

import { Button, TextField, Modal, Typography, Box, Snackbar, IconButton } from "@mui/material";

import React, { useState } from 'react';
import { Close } from '@mui/icons-material';


const boxStyle = {
    background: '#fff',
    border: '2px solid #000',
    width: 400
}

const modalStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const toastStyle = {
    margin: '0 auto'
}

const ForgotPasswordPage = () => {
    const { register, handleSubmit, getValues } = useForm({
        defaultValues: {
            email: ''
        }
    });

    const submitEmail = () => {
        const { email } = getValues();
        sendPasswordResetEmail(auth, email)
        .then(() => {
            setModalOpen(true)
        })
        .catch((err) => {
            if(err.code === 'auth/network-request-failed'){
                setToastOpen(true)
            }
        })

    }

    const [modalOpen, setModalOpen] = useState(false)
    const [toastOpen, setToastOpen] = useState(false)

    return(
        <React.Fragment>
            
        <main className='forgot-password-page'>
            <h1>Forgot Password</h1>
            <form onSubmit={handleSubmit(submitEmail)}>
                <TextField 
                    {...register('email')}
                    placeholder="Enter the email for this account"
                    type="email"
                    name={'email'}
                    label="Email"
                />

                <Button variant="contained" type='submit'>
                    Submit
                </Button>
            </form>

            <Modal
                sx={modalStyle}
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={boxStyle}>
                    <Typography id="modal-modal-title" component="h2">
                        Check Your Email
                    </Typography>
                    <Typography id="modal-modal-description">
                        We've sent you a link to help you reset 
                        your email.
                    </Typography>
                </Box>
            </Modal>



            <Snackbar
                sx={toastStyle}
                open={toastOpen}
                onClose={() => setToastOpen(false)}
                autoHideDuration={3000}
                message="Not connected to the Internet"
                action={
                    <IconButton onClick={() => setToastOpen(false)}>
                        <Close/>
                    </IconButton>
                }
            />
          

        </main>
    </React.Fragment>
    )
}

export default ForgotPasswordPage;