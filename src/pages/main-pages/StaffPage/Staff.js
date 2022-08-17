import Firebase from '../../../utils/firebase.utils';
import { query, collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState, useId } from 'react';
import { AvatarGroup, Box, Button, Grid } from '@mui/material';

import staffData from '../../../mock/MOCK_DATA.json'
import { useNavigate } from 'react-router-dom';
import styles from './staff-page.module.scss';

import { Avatar } from '@mui/material';
import { flexCenter } from '../../../utils/style.utils';

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

            <Grid container>
                <Grid item xs={12} md={6}>
                    <section className={styles.section}>
                        <h3>Staff</h3>
                        <AvatarGroup max={4}>
                        {
                            staff.filter((el, index) => index < 5).map(({ name, profileURL }, index) => (
                                <Avatar key={index} />
                            ))
                        }
                        </AvatarGroup>

                        <Box sx={{...flexCenter, justifyContent: 'space-between'}}>
                            <Button 
                                variant='contained' 
                                disableElevation 
                                onClick={() => navigate('/dashboard/add-staff')}>
                                Add Staff
                            </Button>

                            <Button onClick={() => navigate('/dashboard/all-staff')}>
                                See All
                            </Button>
                        </Box>
                        
                        
                    </section>

                </Grid>
                <Grid item xs={12} md={6}>

                </Grid>
            </Grid>
        </main>
    )
}

export default StaffPage;