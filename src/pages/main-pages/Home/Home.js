import { Card, Grid, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Avatar } from "@mui/material";
import { People, DeliveryDining, Money } from "@mui/icons-material";

import orders from '../../../mock/orders.json';
import './home.styles.scss';

const createOrderTableData = (id, customerName, statusCode, statusMessage, orderTotal, orderDate) => {
    return { id, customerName, statusCode, statusMessage, orderTotal, orderDate };
}

const orderTableRows = orders.map(({ id, customer, status, date_created }) => {
    return createOrderTableData(id, customer.name, status.code, status.message, 10000, date_created)
})

const flexCenterStyle = {
    display: 'flex',
    alignItems: 'center'
}

const HomePage = () => {

    const Vitals = [
        { 
            name: 'TOTAL CUSTOMERS',
            icon: <People />,
            value: '138'
        },
        { 
            name: 'BUDGET THIS MONTH',
            icon: <Money />,
            value: '150,000'
        },
        { 
            name: 'TOTAL ORDERS',
            icon: <DeliveryDining />,
            value: '128'
        },
        { 
            name: 'TOTAL CUSTOMERS',
            icon: <People />,
            value: '138'
        }



    ]

    return(
        <main className="dashboard-pages">

            <Grid container>
                {
                    Vitals.map(item => (
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className="card">
                        <Box sx={{...flexCenterStyle, justifyContent: 'space-between'}}>
                            <Typography component={'h2'}>
                                { item.name }
                            </Typography>
                            <Avatar>
                                { item.icon }
                            </Avatar>
                        </Box>
                        <Typography component={'h1'}>
                            { item.value }
                        </Typography>
                        </Card>
                    </Grid>
                    ))
                }


                {/* Second Column */}
                <Grid item xs={12} lg={8}>
                    <OrderTable />
                </Grid>
                <Grid item xs={12} md={3}>

                </Grid>

            </Grid>




        </main>
    )
}


const OrderTable = () => (
<TableContainer component={Paper}>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order Total</TableCell>
                <TableCell>Order Date</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                orderTableRows.map(row => (
                    <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.customerName}</TableCell>
                        <TableCell>
                            <div className={`chip ${row.statusMessage}`}>
                                {row.statusMessage.toUpperCase()}
                            </div>
                        </TableCell>
                        <TableCell>{row.orderTotal}</TableCell>
                        <TableCell>{row.orderDate}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
</TableContainer>

)

export default HomePage;