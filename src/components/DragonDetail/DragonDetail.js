import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const DragonDetail = ({ isOpen, closeModal, dragon }) => {
    const classes = useStyles();

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
                    {/* <Button onClick={handleClose} color="primary">
            Cancel
          </Button> */}
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            : ""
    )
}

export default DragonDetail;