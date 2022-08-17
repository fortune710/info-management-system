import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../../utils/firebase.utils';
import { useEffect, useReducer } from 'react';
import { TableContainer, Paper, TableHead, TableBody, TableCell, Table, Typography } from '@mui/material';

import LoadingController from '../../../components/Loading/LoadingController';

const ACTIONS = {
    ADD_STAFF: 'add-staff',
    CLOSE_LOADING_SCREEN: 'close-screen-loading' //Action to change the loading controller before table is displayed
}

function reducer(state, action) {
    switch(action.type){
        case ACTIONS.ADD_STAFF:
            return { staff: action.payload.staff }
        case ACTIONS.SET_LOADING:
            return { isLoading: false }
        default:
            return state
    }
}

export default function AllStaffPage() {
    const [state, dispatch] = useReducer(reducer, { staff: [], isScreenLoading: true })

    useEffect(() => {
        async function getAllStaff() {
            const staffCollection = collection(firestore, 'staff')
            getDocs(staffCollection)
            .then(response => {
                dispatch({ type: ACTIONS.ADD_STAFF, payload: { staff: response } })
                dispatch({ type: ACTIONS.CLOSE_LOADING_SCREEN })
            })
            .catch((err) => {
                console.error(err.code)
                dispatch({ type: ACTIONS.CLOSE_LOADING_SCREEN })
            })

        }

        getAllStaff()
    }, [])

    const { staff, isLoading } = state


    return (
        <main>
            {
                isLoading ? <LoadingController isOpen={isLoading} message={'Getting Staff Data...'} handleDismiss={() => dispatch({type: ACTIONS.CLOSE_LOADING_SCREEN })}/>
                : <StaffTable staff={staff} />
            }

        </main>
    )
}


const StaffTable = ({ staff }) => (
    <>
        {
            staff.length <= 0 ? <Typography>No staff available</Typography>
            :(<TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Position</TableCell>
                        <TableCell>Date Joined</TableCell>
                    </TableHead>
                    <TableBody>
                        {
                            staff.map(person => (
                                <>
                                <TableCell>{ person.id }</TableCell>
                                <TableCell>{ person.name }</TableCell>
                                <TableCell>{ person.position }</TableCell>
                                <TableCell>{ person.dateJoiined }</TableCell>
                                </>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>)
        }
    </>
)


