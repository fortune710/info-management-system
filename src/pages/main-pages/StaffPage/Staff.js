import Avatar from '../../../components/Avatar/Avatar'
import Firebase from '../../../firebase-init';
import { query, collection, getDocs, addDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Button from '../../../components/Button/Button'
const StaffPage = () => {

    const [staff, setStaff] = useState([])
    const firestore = getFirestore(Firebase);
    const [screenLoading, setscreenLoading] = useState(true)

    
    useEffect(() => {
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

        
    })

    return(
        <main className="app-page">
            <div>
                <h1>Your Staff</h1>
            </div>

            <div className="staff-detail">
                <section className='p-8'>
                    <div className='flex w-full'>
                    {
                        staff.map(({ name, profileURL}) => (
                            <Avatar name={name} src={profileURL} />
                        ))
                    }
                    </div>
                    <Button>
                        Add a New Staff
                    </Button>
                </section>

            </div>
        </main>
    )
}

export default StaffPage;