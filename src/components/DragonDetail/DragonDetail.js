import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core/';

const DragonDetail = ({ isOpen, closeModal, dragon }) => {
    const handleClose = () => {
        closeModal();
    };

    return (
        dragon ?
            <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{dragon.name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {dragon.type}
                    </DialogContentText>
                    <DialogContentText>
                        {dragon.createdAt}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            : ""
    )
}

export default DragonDetail;