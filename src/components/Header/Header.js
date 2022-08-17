import { Notifications } from "@mui/icons-material"
import { Avatar, Box, IconButton } from "@mui/material"

import './header.styles.scss';

const Header = () => {
    return (
        <nav>

            <Box
                sx={{ display:'flex', gap:'10px' }}
            >
                <IconButton>
                    <Notifications/>
                </IconButton>
                <Avatar sx={{ width:35, height:35 }} />
            </Box>
        </nav>
    )
}

export default Header;