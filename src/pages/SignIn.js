//import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

//Component Imports
import FormInput from '../components/FormInput/FormInput';

//Firebase App Config
//import Firebase from '../firebase-init';


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
        router('/main', { replace: true })
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
                <FormInput 
                    register={register}
                    name={'email'} 
                    type="email" 
                    placeholder="Please enter your email"
                />

                <FormInput 
                    register={register}
                    name={'password'} 
                    type="password" 
                    placeholder="Please enter your email"
                />

                <button type='submit'>
                    Login
                </button>

            </form>
        </main>
    )


}

export default SignInPage;