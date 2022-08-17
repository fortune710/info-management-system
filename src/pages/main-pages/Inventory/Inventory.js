import { Search, Close } from "@mui/icons-material";
import { IconButton, InputBase,  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import inventory from '../../../mock/inventory.json';
import './inventory.styles.scss';

function createInventoryData(id, itemName, quanityLeft, code, remark){
    return { id, itemName, quanityLeft, code, remark };
}

const tableRows = inventory.map(({ products, quantity_left, status}) => (
    createInventoryData(products.id, products.name, quantity_left, status.code, status.message)
))

const InventoryPage = () => {

    return(
        <main className="dashboard-pages">
            Inventory
            <Paper
                sx={{ p:'2px 4px', display:'flex', alignItems:'center', gap:'1em', width:400 }}
            >
                <Search/>
                <InputBase
                    placeholder="Search your Inventory"
                />
                <IconButton>
                    <Close />
                </IconButton>
            </Paper>

            <TableContainer 
                className="table-container"
                component={Paper}
                //sx={{ marginTop:'10px' }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Item Name</TableCell>
                            <TableCell>Quantity Left</TableCell>
                            <TableCell>Remark</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tableRows.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.itemName}</TableCell>
                                    <TableCell>{row.quanityLeft}</TableCell>
                                    <TableCell>
                                        <div className={`chip code-${row.code}`}>{row.remark.toUpperCase()}</div>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        
        </main>
    )
}

export default InventoryPage;