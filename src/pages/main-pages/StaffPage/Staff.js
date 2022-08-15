import Firebase from '../../../firebase-init';
import { query, collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState, useId } from 'react';
import { AvatarGroup, Button } from '@mui/material';

import staffData from '../../../mock/MOCK_DATA.json'
import { useNavigate } from 'react-router-dom';
import styles from './staff-page.module.scss';

import { Avatar } from '@mui/material';

const StaffPage = () => {
    const navigate = useNavigate();
    const [staff, setStaff] = useState([])
    const firestore = getFirestore(Firebase);
    const [screenLoading, setscreenLoading] = useState(true)

    
    useEffect(() => {
        /*
        async function getStaff(){
            const ref = collection('staff')
            getDocs(firestore, ref)
            .then(data => setStaff(data))
            .catch(err =>  console.log(err))
        }

        Promise.all([getStaff()])
        .then(() => {
            setscreenLoading(false)
        })
        */
        setStaff(staffData)
        
    })

    return(
        <main className="dashboard-pages">
            <div>
                <h1>Your Staff</h1>
            </div>

            <div className={styles.staffDetail}>
                <section className={styles.section}>
                    <h3>Staff</h3>
                    <AvatarGroup max={4}>
                    {
                        staff.filter((el, index) => index < 5).map(({ name, profileURL }, index) => (
                            <Avatar key={index} />
                        ))
                    }
                    </AvatarGroup>
                    
                    <Button 
                        variant='contained' 
                        disableElevation 
                        onClick={() => navigate('/dashboard/add-staff')}>
                        Add Staff
                    </Button>
                    
                </section>

            </div>
        </main>
    )
}

export default StaffPage;