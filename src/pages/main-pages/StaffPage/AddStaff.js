import { useForm } from 'react-hook-form';
import Firebase from '../../../firebase-init';
import { collection, addDoc, getFirestore } from 'firebase/firestore';

import Button from '../../../components/Button/Button';

import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';

const firestore = getFirestore(Firebase)

const AddStaffPage = () => {
    const { register, handleSubmit, getValues, formState, setValue } = useForm({
        defaultValues: {
            id: '',
            name: '',
            email: '',
            phoneNumber: '',
            dateJoined: '',
            position: '',
            gender: '',
            profileURL: ''
        }
    })

    const [gender, setGender] = useState(undefined)
    
    function createNewStaff(){
        const ref = collection(firestore, 'staff')
        return addDoc(ref, getValues())
    }

    return(
        <main className='app-page'>
            <form>
                <TextField
                    name={'name'}
                    {...register('name')}
                    placeholder="Enter the employee's name"
                    label="Employee Name"
                    required
                />

                <TextField
                    name={'email'}
                    {...register('email')}
                    type="email"
                    placeholder="Enter the employee's email address"
                    label="Employee Email"
                    error={formState.touchedFields.email && !formState.isValid}
                />

                <TextField
                    name={'phoneNumber'}
                    {...register('email')}
                    placeholder="Enter the employee's phone number"
                    label="Employee Phone Number"
                    type={'tel'}
                    required
                />
                <TextField
                    name={'dateJoined'}
                    {...register('dateJoined')}
                    placeholder="Enter the date the employee joined"
                    label="Date Joined"
                    required
                />

                <TextField
                    name={'position'}
                    {...register('position')}
                    type="text"
                    placeholder="Enter the employee's role in the business"
                    label="Employee Position"
                    required
                />

                <InputLabel id='employee-gender'>Gender</InputLabel>
                <Select
                    labelId='employee-gender'
                    label="Gender"
                    id='gender'
                    {...register('gender')}
                >
                    <MenuItem value={'male'}>Male</MenuItem>
                    <MenuItem value={'female'}>Female</MenuItem>
                </Select>


                <Button type="submit">
                    Submit
                </Button>
            </form>
        </main>
    )
}

export default AddStaffPage;