import { Modal, Box, CircularProgress, Typography } from "@mui/material"
import { flexMiddleBothAxis } from '../../utils/style.utils';

const loadingControllerStyle = {
    background: '#fff',
    borderRadius: '6px',
    gap: '1em'
}

const LoadingController = ({ isOpen, message, handleDismiss }) => {

    return(
        <Modal
            open={isOpen}
            sx={flexMiddleBothAxis}
            onClose={handleDismiss}
        >
            <Box sx={{...flexMiddleBothAxis, ...loadingControllerStyle}}>
                <CircularProgress/>
                <Typography>
                    { message }
                </Typography>
            </Box>
        </Modal>
    )
}

export default LoadingController;

